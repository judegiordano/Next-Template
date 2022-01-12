import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const token = req.cookies["jid"];
		const user = jwt.verify(token, "supersecret") as JwtPayload;
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ ok: false, error });
	}
};
