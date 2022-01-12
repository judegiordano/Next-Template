import React from "react";

import { RestClient } from "@Utils";

export const Login: React.FC = (): JSX.Element => {
	return (
		<div>
			<button onClick={async () => {
				await RestClient.post("auth/login");
				window.location.href = "/example/account/profile";
			}}>login</button>
		</div>
	);
};

export default React.memo(Login);
