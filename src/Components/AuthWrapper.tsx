import React from "react";

import { useUser } from "@Hooks/useUser";

interface IAuthWrapper {
	children: React.ReactNode
}

export const AuthWrapper: React.FC<IAuthWrapper> = ({
	children
}: IAuthWrapper): JSX.Element => {
	useUser();
	return (
		<>
			{children}
		</>
	);
};
