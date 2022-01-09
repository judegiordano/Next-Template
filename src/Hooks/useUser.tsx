import { useSWRConfig } from "swr";
import toast from "react-hot-toast";

import { useUsersStore } from "@Store";
import { User } from "@Types";
import { useApi } from "./useApi";

export function useUser() {
	const { mutate } = useSWRConfig();
	const { setUsers, users } = useUsersStore();
	const { data, isLoading, error } = useApi<User[]>("/api/example", "users", {
		onError: (error, key) => {
			console.log(error);
			toast.error(error.toString());
			mutate(key, users, false);
		},
		onSuccess: (data) => setUsers(data)
	});
	return {
		data,
		isLoading,
		error
	};
}
