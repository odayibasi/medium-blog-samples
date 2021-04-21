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
import {ProductModal} from "../ProductForm/ProductModal";
import {TablePagination} from "@material-ui/core";


export class ProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            selectedProduct: null,
            page: 0,
            rowsPerPage: 2,
        }
    }


    componentDidMount() {
        this.props.getProducts();
    }


    handleEdit = (id) => {
        const {products} = this.props.products;
        const selectedProduct = products.find(el => el.id === id);
        if (selectedProduct) {
            this.setState({isModalOpen: true, selectedProduct: selectedProduct});
        }
    }

    handleModalClose = () => {
        this.setState({isModalOpen: false, selectedProduct: null})
    }

    handleModalApply = (product) => {
        product.updatedDate = (new Date()).getTime();
        this.setState({isModalOpen: false, selectedProduct: null})
        this.props.updateProduct(product);
    }


    handleDelete = (id) => {
        this.props.delProduct(id);
    }


    formatDate = (date) => {
        const formattedDate = (new Date(date)).toISOString();
        return formattedDate;

    }

    handleChangePage = (event, pageNumber) => {
        this.setState({page: pageNumber});
    }


    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: event.target.value})
    }


    render() {

        const {products, fetching, fetched, error} = this.props.products;
        const {page, rowsPerPage} = this.state;

        let filteredProducts = [];
        products.forEach((el, index) => {
            const minIndex = page * rowsPerPage;
            const maxIndex = (page + 1) * rowsPerPage;
            if (index >= minIndex && index < maxIndex) {
                filteredProducts.push(el);
            }
        });

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className='products-table' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                <TableCell align="right">Price&nbsp;(TL)</TableCell>
                                <TableCell align="right">Created</TableCell>
                                <TableCell align="right">Updated</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredProducts.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{this.formatDate(row.creationDate)}</TableCell>
                                    <TableCell align="right">{this.formatDate(row.updatedDate)}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="edit" className='edit-btn'
                                                    onClick={(e) => this.handleEdit(row.id)}
                                        >
                                            <EditIcon fontSize="small"/>
                                        </IconButton>
                                        <IconButton aria-label="delete" className='delete-btn'
                                                    onClick={(e) => this.handleDelete(row.id)}
                                        >
                                            <DeleteIcon fontSize="small"/>
                                        </IconButton>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        component="div"
                        count={products.length}
                        page={page}
                        rowsPerPageOptions={[2, 5, 10]}
                        onChangePage={this.handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </TableContainer>

                <ProductModal
                    isOpen={this.state.isModalOpen}
                    handleClose={this.handleModalClose}
                    handleApply={this.handleModalApply}
                    selectedProduct={this.state.selectedProduct}
                    title='Edit Product'
                    desc='Please Enter fields ... ... ..'
                    applyTitle='Update'
                />
            </div>
        );

    }


}
