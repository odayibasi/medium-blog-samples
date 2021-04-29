import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import {Box, Button, Checkbox, Collapse, TablePagination, TextField} from "@material-ui/core";
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
			selectedRows: [],
			rowDetailOpenStatusMap: new Map(),
		}
	}


	componentDidMount() {
		this.props.getProducts();
		this.props.getHistory();
	}


	handleRowDetailsShowHide = (rowId) => {
		const {rowDetailOpenStatusMap} = this.state;
		const status = rowDetailOpenStatusMap.get(rowId);
		const newOpenStatusMap = new Map(rowDetailOpenStatusMap);
		newOpenStatusMap.set(rowId, !status);
		this.setState({rowDetailOpenStatusMap: newOpenStatusMap});
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


	renderTableRow = (row) => {
		const {history} = this.props.history;
		const historyExist = history.some(el => el.productId == row.id);

		const {rowDetailOpenStatusMap} = this.state;
		const status = rowDetailOpenStatusMap.get(row.id);
		const titleShowHide = status ? 'Hide History' : 'Show History';
		const colorShowHide = status ? 'secondary' : 'primary';

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
					<Button style={{minWidth: '160px'}} onClick={(e) => this.handleRowDetailsShowHide(row.id)}
					        variant="contained" color={colorShowHide}>{titleShowHide}</Button>}
				</TableCell>
			</TableRow>
		)
	}

	renderTableRowDetails = (row) => {

		const {history} = this.props.history;
		const historyElements = history.filter(el => el.productId == row.id);

		const {rowDetailOpenStatusMap} = this.state;
		const status = rowDetailOpenStatusMap.get(row.id);

		return (
			<TableRow>
				<TableCell style={{backgroundColor: "lightblue", paddingBottom: 0, paddingTop: 0}} colSpan={10}>
					<Collapse in={status} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>User</TableCell>
										<TableCell align='right'>Action</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{historyElements.map(historyRow => (
										<TableRow key={historyRow.id}>
											<TableCell component="th" scope="row">
												{historyRow.updatedDate}
											</TableCell>
											<TableCell>{historyRow.username}</TableCell>
											<TableCell align="right">{historyRow.action}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>

						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		)
	}


	render() {

		const {products} = this.props.products;
		const {page, rowsPerPage} = this.state;
		const paginatedProducts = this.getPaginatedProducts();


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
									return (<>
										{this.renderTableRow(row)}
										{this.renderTableRowDetails(row)}
									</>)
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
