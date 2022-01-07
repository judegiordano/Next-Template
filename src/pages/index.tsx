import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

import { AppLink } from "@Elements/AppLink";
import { useCounterStore } from "@Store";

const CounterControls: React.FC = (): JSX.Element => {
	const { increment, decrement, clear } = useCounterStore();
	return (
		<div className="max-w-[200px] m-auto">
			<Button onClick={increment} fullWidth variant="outlined" color="success"><AddIcon /></Button>
			<Button onClick={decrement} fullWidth variant="outlined" color="warning"><RemoveIcon /></Button>
			<Button onClick={() => {
				clear();
				toast.success("counter cleared");
			}} variant="contained" fullWidth className="bg-red-700" color="error"><DeleteIcon /></Button>
		</div>
	);
};

const CountDisplay: React.FC = (): JSX.Element => {
	const { count } = useCounterStore();
	return (
		<div className="py-5 text-7xl">
			{count}
		</div>
	);
};

const Home: React.FC = (): JSX.Element => {
	return (
		<div>
			<div className="text-2xl text-center">
				<h1>
					Welcome to <AppLink target="_blank" href="https://nextjs.org">Next.js!</AppLink>
				</h1>
				<CountDisplay />
				<CounterControls />
			</div>
		</div>
	);
};

export default Home;
