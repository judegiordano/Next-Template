import React, {useState} from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

import { AppLink } from "@Elements";
import { Dialog } from "@Components/Dialog";
import { AddIcon, DeleteIcon, RemoveIcon } from "@Icons";
import { useCounterStore } from "@Store";

const CounterControls: React.FC = (): JSX.Element => {
	const [open, setOpen] = useState(false);
	const { increment, decrement, clear } = useCounterStore();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className="max-w-[200px] m-auto">
			<Button className="mb-2" onClick={increment} fullWidth variant="outlined" color="success"><AddIcon /></Button>
			<Button className="mb-2" onClick={decrement} fullWidth variant="outlined" color="warning"><RemoveIcon /></Button>
			<Button onClick={handleOpen} variant="contained" fullWidth className="bg-red-700" color="error">
				<DeleteIcon />
			</Button>
			<Dialog
				title="Clear Counter?"
				body="are you sure you want to clear the current counter?"
				handleAgree={() => {
					clear();
					handleClose();
					toast.success("counter cleared");
				}}
				open={open}
				handleClose={handleClose}
			/>
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
		<div className="text-2xl text-center">
			<h1>
					Welcome to <AppLink target="_blank" href="https://nextjs.org">Next.js!</AppLink>
			</h1>
			<CountDisplay />
			<CounterControls />
		</div>
	);
};

export default Home;
