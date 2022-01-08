import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface ISpinnerProps {
	visible?: boolean
	size?: number
}

export const Spinner: React.FC<ISpinnerProps> = ({
	visible = true,
	size = 50
}: ISpinnerProps): JSX.Element => {
	if(!visible) return null;
	return (
		<div className="px-2 py-3">
			<CircularProgress size={size} />
		</div>
	);
};
