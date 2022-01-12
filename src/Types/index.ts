/* eslint-disable @typescript-eslint/no-explicit-any */

export type Todo = {
	id: number
	title: string
	completed: boolean
}

export type User = {
	id: number
	username: string
}

export type ServerSideResponse = {
	data: {
		ok: boolean
		[key: string]: any
	}
}
