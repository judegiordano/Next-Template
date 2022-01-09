import { useSWRConfig } from "swr";

import { useUsersStore } from "@Store";
import { useApi } from "./useApi";

type User = {
	id: 1,
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	},
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export function useUser() {
	const { mutate } = useSWRConfig();
	const { setUsers, users } = useUsersStore();
	const { data, isLoading, error } = useApi<User[]>("/api/example", "users", {
		onError: (error, key) => {
			console.log(error);
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
