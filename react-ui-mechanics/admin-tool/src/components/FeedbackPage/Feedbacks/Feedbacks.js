import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {makeStyles} from '@material-ui/core/styles';
import MuiAlert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export function CustomizedSnackbars(props) {
	const classes = useStyles();

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		props.handleOpen(false);
	};


	const {severity, open} = props;

	return (
		<div className={classes.root}>
			<Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={6000}
			          onClose={handleClose}>
				<MuiAlert elevation={6} variant="filled" onClose={handleClose}
				          severity={severity}>{`This is a ${severity} message!`}</MuiAlert>
			</Snackbar>

		</div>
	);
}
