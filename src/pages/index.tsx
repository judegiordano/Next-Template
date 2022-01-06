import { AppLink } from "@Elements/AppLink";
import React from "react";

const Home: React.FC = (): JSX.Element => {
	return (
		<div>
			<main className="text-2xl text-center">
				<h1>
					Welcome to <AppLink target="_blank" href="https://nextjs.org">Next.js!</AppLink>
				</h1>
			</main>
		</div>
	);
};

export default Home;
