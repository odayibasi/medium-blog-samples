import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(code, name, calories, fat, carbs, protein, creationDate, updatedDate) {
    return {code,name, calories, fat, carbs, protein, creationDate, updatedDate};
}

const rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0, 1618815892370, 1618815892370),
    createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3, 1618815892370, 1618815892370),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0, 1618815892370, 1618815892370),
    createData(4, 'Cupcake', 305, 3.7, 67, 4.3, 1618815892370, 1618815892370),
    createData(5, 'Gingerbread', 356, 16.0, 49, 3.9, 1618815892370, 1618815892370),
];

export function ProductTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Updated</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.code}</TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">{row.creationDate}</TableCell>
                            <TableCell align="right">{row.updatedDate}</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
