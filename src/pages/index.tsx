import React from "react";

import { DeleteMe } from "@Components/_DeleteMe_";

const Home: React.FC = (): JSX.Element => {
	return (
		<div className="text-2xl text-center">
			<DeleteMe />
		</div>
	);
};

export default React.memo(Home);
