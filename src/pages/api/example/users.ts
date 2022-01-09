import { NextApiRequest, NextApiResponse } from "next";

async function simulateDelay() {
	return new Promise((res) => setTimeout(res, 1000));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await simulateDelay();
		const users = (await import("./users.json")).default;
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};
