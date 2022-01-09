import toast from "react-hot-toast";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

import { GetItem, SetItem } from "@Store";

type UseApi<T> = {
	data: T
	isLoading: boolean
	error: string
}

type UseApiConfig<T> = {
	refreshInterval?: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onError?: (error: any, key: string) => void
	onSuccess?: (data: T, key: string) => void
}

const storageKey = "next-demo.swr";

async function fetcher<T>(url: string, key?: string) {
	const { data } = await axios.get(`${url}/${key}`);
	return data as T;
}

export function useApi<T>(url: string, key?: string, options?: UseApiConfig<T>): UseApi<T> {
	const { mutate } = useSWRConfig();

	const { data, error } = useSWR(key, () => fetcher<T>(url, key), {
		refreshInterval: 5000,
		onError: async (error, key) => {
			console.log(error);
			toast.error(error.toString());
			const cache = GetItem<T>(`${storageKey}.${key}`);
			cache && mutate(key, cache, false);
		},
		onSuccess: (data: T, key: string) => SetItem<T>(`${storageKey}.${key}`, data),
		...options
	});

	return {
		data,
		isLoading: !error && !data,
		error
	};
}
