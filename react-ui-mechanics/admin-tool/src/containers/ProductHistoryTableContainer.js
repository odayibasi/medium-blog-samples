import {connect} from 'react-redux'
import {ProductHistoryTable} from 'components/ProductHistoryTable/ProductHistoryTable'
import {getProducts, dispatchDelProduct, updProduct} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => (
    {
        getProducts: (username) => dispatch(getProducts(username)),
        delProduct: (id) => dispatchDelProduct(dispatch, id),
        updateProduct: (product) => dispatch(updProduct(product)),

    }
)

export const ProductHistoryTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductHistoryTable));
