import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

import { AppLink } from "@Elements";
import { useCounterStore } from "@Store";
import { Dialog } from "@Components/Dialog";
import { Spinner } from "@Components/Spinner";
import { useApi } from "@Hooks/useApi";
import { AddIcon, DeleteIcon, RemoveIcon } from "@Icons";

type Example = {
	id: 1,
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	},
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

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

interface IUsersComponentProps {
	users: Example[]
}

const UserComponent: React.FC<IUsersComponentProps> = ({
	users
}: IUsersComponentProps): JSX.Element => {
	return (
		<div className="max-w-[300px] m-auto py-3">
			{
				users.map(({
					username,
					email
				}, i) => (
					<div className="text-xs text-left" key={i}>
						{i + 1}. <span className="font-semibold">{username}</span>: {email}
					</div>
				))
			}
		</div>
	);
};

const Home: React.FC = (): JSX.Element => {
	const { data, isLoading } = useApi<Example[]>("users");

	return (
		<div className="text-2xl text-center">
			<h1>
				Welcome to <AppLink target="_blank" href="https://nextjs.org">Next.js!</AppLink>
			</h1>
			<CountDisplay />
			<CounterControls />
			<Spinner visible={isLoading} />
			{
				!isLoading && data && <UserComponent users={data} />
			}
		</div>
	);
};

export default React.memo(Home);
