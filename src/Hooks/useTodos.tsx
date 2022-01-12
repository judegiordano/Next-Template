import { useSWRConfig } from "swr";
import toast from "react-hot-toast";

import { useTodosStore } from "@Store";
import { Todo } from "@Types";
import { useApi } from "./useApi";

export function useTodos() {
	const { mutate } = useSWRConfig();
	const { setTodos, todos } = useTodosStore();
	const { data, isLoading, error } = useApi<Todo[]>("/api/example", "todos", {
		onError: (error, key) => {
			console.log(error);
			toast.error(error.toString());
			mutate(key, todos, false);
		},
		onSuccess: (data) => setTodos(data),
		refreshInterval: 5000
	});
	return {
		todos,
		data,
		isLoading,
		error
	};
}
