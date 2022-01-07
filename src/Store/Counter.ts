/* eslint-disable @typescript-eslint/no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";

type UseCountState = {
	count: number
	increment: () => void
	decrement: () => void
	setCount: (n: number) => void
	clear: () => void
}

export const useCounterStore = create<UseCountState>(
	persist(
		(set, get) => ({
			count: 0,
			increment: () => set(state => ({ count: state.count + 1 })),
			decrement: () => set(state => ({ count: state.count <= 0 ? state.count : state.count - 1 })),
			setCount: (count: number) => set({ count }),
			clear: () => set({ count: 0 })
		}),
		{
			name: "next-demo.counter",
			getStorage: () => localStorage,
			version: 1
		}
	)
);
