import React from "react";
import Button from "@mui/material/Button";
import _Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IDialogProps {
	title: string
	body: string
	handleAgree: () => void
	handleClose: () => void
	open: boolean
}

export const Dialog: React.FC<IDialogProps> = ({
	title,
	body,
	handleAgree,
	handleClose,
	open = false
}: IDialogProps): JSX.Element => {
	return (
		<_Dialog
			keepMounted
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{title}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{body}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={() => {
					handleAgree();
					handleClose();
				}} autoFocus>
					Confirm
				</Button>
			</DialogActions>
		</_Dialog>
	);
};
