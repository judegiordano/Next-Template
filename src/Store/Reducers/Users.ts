/* eslint-disable @typescript-eslint/no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@Types";

type UseUsersState = {
	users: User[]
	setUsers: (u: User[]) => void
	clear: () => void
}

export const useUsersStore = create<UseUsersState>(
	persist(
		(set, get) => ({
			users: [],
			setUsers: (users: User[]) => set({ users }),
			clear: () => set({ users: [] })
		}),
		{
			name: "next-demo.users",
			getStorage: () => localStorage,
			version: 1
		}
	)
);
