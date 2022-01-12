import { NextApiRequest, NextApiResponse } from "next";

import { Cookie } from "@Utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method != "POST") throw "method not allowed";
		Cookie.DestroyCookie(res);
		res.status(200).json({ ok: true });
	} catch (error) {
		res.status(500).json({ ok: false, error });
	}
};
