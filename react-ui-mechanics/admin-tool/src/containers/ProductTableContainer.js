import {connect} from 'react-redux'
import {ProductTable} from 'components/ProductTable/ProductTable'
import {getProducts, dispatchDelProduct, updProduct, addHistoryItem} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => (
    {
        getProducts: (username) => dispatch(getProducts(username)),
        delProduct: (id) => dispatchDelProduct(dispatch, id),
        updateProduct: (product) => dispatch(updProduct(product)),
        addHistoryItem: (historyItem) => dispatch(addHistoryItem(historyItem))
    }
)

export const ProductTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductTable));
