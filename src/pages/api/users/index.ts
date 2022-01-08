import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const users = (await import("./users.json")).default;
	res.status(200).json(users);
};
