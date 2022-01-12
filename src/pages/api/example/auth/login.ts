import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import { Cookie } from "@Utils";

const user = {
	id: 1,
	username: "judeboy"
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method != "POST") throw "method not allowed";
		const token = jwt.sign(user, "supersecret");
		Cookie.SetCookie(res, token);
		res.status(200).json({
			ok: true,
			user
		});
	} catch (error) {
		res.status(500).json({ ok: false, error });
	}
};
