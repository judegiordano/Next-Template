import useSWR from "swr";

type UseApi<T> = {
	data: T
	isLoading: boolean
	error: string
}

const base = "/api";

const fetcher = async (url?: string) => {
	const res = await fetch(`${base}/${url}`, {
		method: "GET"
	});
	return await res.json();
};

export function useApi<T>(url?: string): UseApi<T> {
	const { data, error } = useSWR(url, fetcher, {
		refreshInterval: 2000
	});
	return {
		data,
		isLoading: !error && !data,
		error
	};
}
