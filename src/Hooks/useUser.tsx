import { useSWRConfig } from "swr";

import { useUserStore } from "@Store";
import { User } from "@Types";
import { useApi } from "./useApi";

export function useUser() {
	const { mutate } = useSWRConfig();
	const { setUser, user } = useUserStore();
	const { data, isLoading, error } = useApi<User>("/api/example/auth", "user", {
		onError: (error, key) => {
			console.log(error);
			mutate(key, user, false);
		},
		onSuccess: (data) => setUser(data)
	});
	return {
		data,
		isLoading,
		error
	};
}
