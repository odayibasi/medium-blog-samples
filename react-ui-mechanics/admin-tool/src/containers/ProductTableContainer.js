import {connect} from 'react-redux'
import {ProductTable} from 'components/ProductTable/ProductTable'
import {getProducts, dispatchDelProduct} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => (
    {
        getProducts: (username) => dispatch(getProducts(username)),
        delProduct: (id) => dispatchDelProduct(dispatch, id),
    }
)

export const ProductTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductTable));
