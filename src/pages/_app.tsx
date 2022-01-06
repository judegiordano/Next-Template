import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>Next.js Bsae App</title>
				<meta charSet="UTF-8" />
				<meta name="node application" content="A simple web application" />
				<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
				<meta name="description" content="Next.js Base Proj" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Jude Giordano" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="p-3 m-auto max-w-7xl font-content">
				<Component {...pageProps} />
			</div>
			<footer className="items-center justify-center w-full h-full mt-10 text-center border-t-2 border-gray-200">
				<div style={{ paddingTop: "10px" }}>
					&#169; Copyright {new Date().getFullYear().toString()}
				</div>
			</footer>
		</>
	);
};

export default MyApp;
