/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function middleware(req: NextRequest) {
	try {
		const response = NextResponse.next();
		const { jid } = req.cookies;
		const payload = jwt.verify(jid, "supersecret") as JwtPayload;
		delete payload.iat;
		delete payload.exp;
		const newToken = jwt.sign(payload, "supersecret");
		response.cookie("jid", newToken, {
			path: "/",
			maxAge: 1000 * 60 * 60 * 24 * 7, // one week
			httpOnly: true,
			sameSite: true,
			secure: false
		});
		return response;
	} catch (error) {
		console.log("account middleware error", { error });
		return NextResponse.redirect("/example/auth/login");
	}
}
