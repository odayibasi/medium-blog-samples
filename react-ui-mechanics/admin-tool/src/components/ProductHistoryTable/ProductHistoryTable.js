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
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import {ProductModal} from "../ProductForm/ProductModal";
import {Button, Checkbox, TablePagination, TextField} from "@material-ui/core";
import "./ProductHistoryTable.scss"


export class ProductHistoryTable extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			selectedProduct: null,
			page: 0,
			rowsPerPage: 10,
			searchText: '',
			orderBy: '',
			order: '',
			selectedRows: []
		}
	}


	componentDidMount() {
		this.props.getProducts();
		this.props.getHistory();
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


	handleSelectedPage = (e) => {
		if (e.target.checked) {
			const paginatedProducts = this.getPaginatedProducts();
			const selectedRows = paginatedProducts.map(el => el.id);
			this.setState({selectedRows: selectedRows})
		} else {
			this.setState({selectedRows: []});
		}

	}

	getPaginatedProducts = () => {
		const {products, fetching, fetched, error} = this.props.products;
		const {page, rowsPerPage, searchText} = this.state;

		let filteredProducts = [...products];
		if (searchText) {
			filteredProducts = products.filter(el => {
				return el.name.toLowerCase().includes(searchText.toLowerCase())
			});
		}

		const sortedFilteredProducts = filteredProducts.sort((a, b) => {
			let result = (a.calories > b.calories) ? -1 : 1;
			result = (this.state.order === 'asc') ? result * -1 : result;
			return result;
		})


		let paginatedProducts = [];
		sortedFilteredProducts.forEach((el, index) => {
			const minIndex = page * rowsPerPage;
			const maxIndex = (page + 1) * rowsPerPage;
			if (index >= minIndex && index < maxIndex) {
				paginatedProducts.push(el);
			}
		});
		return paginatedProducts;
	}


	render() {

		const {products} = this.props.products;
		const {history} = this.props.history;

		const {page, rowsPerPage} = this.state;


		const paginatedProducts = this.getPaginatedProducts();
		const {selectedRows} = this.state;
		const pageSelectionFlag = paginatedProducts.every(el => {
			return selectedRows.includes(el.id)
		});


		return (
			<div className='product-table-container'>
				<TableContainer component={Paper}>
					<TextField id="standard-search" label="Search field" type="search"
					           onChange={(e) => {
						           this.setState({searchText: e.target.value})
					           }}/>
					<Table className='products-table' aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Name</TableCell>
								<TableCell align="right"><TableSortLabel
									active={this.state.orderBy === 'calories'}
									direction={this.state.order === 'desc' ? 'desc' : 'asc'}
									onClick={(e) => {
										this.setState({
											orderBy: 'calories',
											order: this.state.order === 'desc' ? 'asc' : 'desc'
										})
									}}
								>Calories</TableSortLabel></TableCell>
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
							{paginatedProducts.map((row) => {

									const historyExist = history.some(el => el.productId == row.id);
									console.log(historyExist);
									return (
										<TableRow key={row.name}>
											<TableCell component="th" scope="row">{row.id}</TableCell>
											<TableCell scope="right">{row.name}</TableCell>
											<TableCell align="right">{row.calories}</TableCell>
											<TableCell align="right">{row.fat}</TableCell>
											<TableCell align="right">{row.carbs}</TableCell>
											<TableCell align="right">{row.protein}</TableCell>
											<TableCell align="right">{row.price}</TableCell>
											<TableCell align="right">{this.formatDate(row.creationDate)}</TableCell>
											<TableCell align="right">{this.formatDate(row.updatedDate)}</TableCell>
											<TableCell align="right">
												{historyExist &&
												<Button variant="contained" color="primary">Show History</Button>}
											</TableCell>
										</TableRow>
									)
								}
							)}
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


			</div>
		);

	}


}
