import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const todos = (await import("./todos.json")).default;
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json(error);
	}
};
