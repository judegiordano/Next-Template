/* eslint-disable @typescript-eslint/no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@Types";

type UseUserState = {
	user: User
	setUser: (u: User) => void
	clear: () => void
}

const emptyUser: User = {
	id: 0,
	username: ""
};

export const useUserStore = create<UseUserState>(
	persist(
		(set, get) => ({
			user: emptyUser,
			setUser: (user: User) => set({ user }),
			clear: () => set({ user: emptyUser })
		}),
		{
			name: "next-demo.user",
			getStorage: () => localStorage,
			version: 1
		}
	)
);
