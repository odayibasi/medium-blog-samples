import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

export default function ContentComp() {
	const classes = useStyles();
	const [value, setValue] = React.useState('Controlled');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField id="standard-basic" label="Standard" />
				<TextField id="standard-multiline-flexible" label="Multiline" multiline rowsMax={4} value={value} onChange={handleChange}/>
				<Button>Accept</Button>
			</div>
		</form>
	);
}
