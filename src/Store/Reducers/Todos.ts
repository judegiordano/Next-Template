/* eslint-disable @typescript-eslint/no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";

import { Todo } from "@Types";

type UseTodosState = {
	todos: Todo[]
	setTodos: (u: Todo[]) => void
	clear: () => void
}

export const useTodosStore = create<UseTodosState>(
	persist(
		(set, get) => ({
			todos: [],
			setTodos: (todos: Todo[]) => set({ todos }),
			clear: () => set({ todos: [] })
		}),
		{
			name: "next-demo.todos",
			getStorage: () => localStorage,
			version: 1
		}
	)
);
