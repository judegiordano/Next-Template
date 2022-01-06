import React from "react";

const Home: React.FC = (): JSX.Element => {
	return (
		<div>
			<main className="text-2xl text-center">
				<h1>
					Welcome to <a target="_blank" className="text-blue-500 underline" href="https://nextjs.org" rel="noreferrer">Next.js!</a>
				</h1>
			</main>
		</div>
	);
};

export default Home;
