import React, { useEffect, useState } from "react";

import { ReadableDate, ReadableTime } from "@Utils";

export const Clock: React.FC = (): JSX.Element => {
	const now = new Date().toISOString();
	const [time, setTime] = useState(`${ReadableDate(now)} ${ReadableTime(now)}`);
	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().toISOString();
			setTime(`${ReadableDate(now)} ${ReadableTime(now)}`);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			{time}
		</div>
	);
};
