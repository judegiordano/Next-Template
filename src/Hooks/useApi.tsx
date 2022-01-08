import toast from "react-hot-toast";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

import { SwrGetItem, SwrSetItem } from "@Store";

type UseApi<T> = {
	data: T
	isLoading: boolean
	error: string
}

const api = axios.create({
	baseURL: "/api/example"
});

async function fetcher<T>(url?: string) {
	const { data } = await api.get(url);
	return data as T;
}

export function useApi<T>(key?: string): UseApi<T> {
	const { mutate } = useSWRConfig();
	const { data, error } = useSWR(key, () => fetcher<T>(key), {
		refreshInterval: 5000,
		onError: async (e, key) => {
			toast.error(e.toString());
			console.log(e);
			const cache = SwrGetItem<T>(key);
			cache && mutate(key, cache, false);
		},
		onSuccess: (data: T, key: string) => SwrSetItem<T>(key, data)
	});

	return {
		data,
		isLoading: !error && !data,
		error
	};
}
