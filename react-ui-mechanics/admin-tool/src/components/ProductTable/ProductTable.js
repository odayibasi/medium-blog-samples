import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';


export class ProductTable extends React.Component {


    componentDidMount() {
        this.props.getProducts();
    }


    render() {

        const {products, fetching, fertched, error} = this.props.products;

        return (
            <TableContainer component={Paper}>
                <Table className='products-table' aria-label="simple table">
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
                        {products.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.code}</TableCell>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.creationDate}</TableCell>
                                <TableCell align="right">{row.updatedDate}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" className='delete-btn'>
                                        <DeleteIcon fontSize="small"/>
                                    </IconButton>
                                    <IconButton aria-label="delete" className='edit-btn'>
                                        <EditIcon fontSize="small"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );

    }


}
