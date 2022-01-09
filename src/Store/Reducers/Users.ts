/* eslint-disable @typescript-eslint/no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";

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
