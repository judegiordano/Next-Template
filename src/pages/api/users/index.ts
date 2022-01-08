import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const users = (await import("./users.json")).default;
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};
