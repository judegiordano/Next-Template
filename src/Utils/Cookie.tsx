import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { ServerResponse } from "http";

export class Cookie {

	public static SetCookie(res: NextApiResponse | ServerResponse, value: string): void {
		try {
			res.setHeader("Set-Cookie", serialize("jid", value, {
				httpOnly: true,
				path: "/",
				maxAge: 60 * 60 * 24, // 1 day
				secure: false,
				sameSite: true
			}));
		} catch (error) {
			throw new Error(error);
		}
	}

	public static GetCookie(req: NextApiRequest): string | undefined {
		try {
			return req.cookies["jid"];
		} catch (error) {
			throw new Error(error);
		}
	}

	public static DestroyCookie(res: NextApiResponse): void {
		try {
			res.setHeader("Set-Cookie", serialize("jid", "", {
				httpOnly: true,
				path: "/",
				maxAge: 0,
				secure: false,
				sameSite: true
			}));
		} catch (error) {
			throw new Error(error);
		}
	}
}
