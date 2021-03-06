import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

import { AppLink } from "@Elements";
import { useCounterStore } from "@Store";
import { Dialog } from "@Components/Dialog";
import { useTodos } from "@Hooks/useTodos";
import { AddIcon, DeleteIcon, RemoveIcon } from "@Icons";

const CounterControls: React.FC = (): JSX.Element => {
	const [open, setOpen] = useState(false);
	const { increment, decrement, clear } = useCounterStore();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className="max-w-[300px] m-auto">
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

const TodosComponent: React.FC = (): JSX.Element => {
	const { todos } = useTodos();
	return (
		<div className="max-w-[300px] m-auto py-3">
			{/* <Spinner visible={isLoading} /> */}
			{
				todos.map(({
					id,
					title
				}, i) => (
					<div className="text-xs text-left border-b-2 border-gray-200" key={i}>
						{id}. <span className="font-bold">{title}</span>
					</div>
				))
			}
		</div>
	);
};

export const DeleteMe: React.FC = (): JSX.Element => {
	return (
		<>
			<h1>
				Welcome to <AppLink target="_blank" href="https://nextjs.org">Next.js!</AppLink>
			</h1>
			<CountDisplay />
			<CounterControls />
			<TodosComponent />
		</>
	);
};
