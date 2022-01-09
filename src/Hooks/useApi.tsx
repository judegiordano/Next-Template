import toast from "react-hot-toast";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

import { GetItem, SetItem } from "@Store";

type UseApi<T> = {
	data: T
	isLoading: boolean
	error: string
}

const storageKey = "next-demo.swr";

async function fetcher<T>(url: string, key?: string) {
	const { data } = await axios.get(`${url}/${key}`);
	return data as T;
}

export function useApi<T>(url: string, key?: string): UseApi<T> {
	const { mutate } = useSWRConfig();
	const { data, error } = useSWR(key, () => fetcher<T>(url, key), {
		refreshInterval: 5000,
		onError: async (e, key) => {
			toast.error(e.toString());
			console.log(e);
			const cache = GetItem<T>(`${storageKey}.${key}`);
			cache && mutate(key, cache, false);
		},
		onSuccess: (data: T, key: string) => SetItem<T>(`${storageKey}.${key}`, data)
	});

	return {
		data,
		isLoading: !error && !data,
		error
	};
}
