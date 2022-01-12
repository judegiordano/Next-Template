/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function middleware(req: NextRequest) {
	try {
		const { jid } = req.cookies;
		jwt.verify(jid, "supersecret") as JwtPayload;
		return NextResponse.redirect("/example/account/profile");
	} catch (error) {
		console.log("auth middleware error", { error });
		return NextResponse.next();
	}
}
