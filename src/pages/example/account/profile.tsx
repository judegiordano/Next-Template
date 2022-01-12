import React from "react";

import { RestClient } from "@Utils";
import { AuthWrapper } from "@Components/AuthWrapper";
import { useUserStore } from "@Store";

export const Profile: React.FC = (): JSX.Element => {
	const { user } = useUserStore();
	return (
		<AuthWrapper>
			{ user.username }
			<div>
				<button onClick={async () => {
					await RestClient.post("auth/logout");
					window.location.href = "/example/auth/login";
				}}>logout</button>
			</div>
		</AuthWrapper>
	);
};

export default React.memo(Profile);
