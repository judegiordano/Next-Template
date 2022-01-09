import { useApi } from "./useApi";

type Example = {
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
	const { data, isLoading, error } = useApi<Example[]>("/api/example", "users");
	return {
		data,
		isLoading,
		error
	};
}
