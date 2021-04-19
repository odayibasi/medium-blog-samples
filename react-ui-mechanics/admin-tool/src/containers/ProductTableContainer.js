import {connect} from 'react-redux'
import {ProductTable} from 'components/ProductTable/ProductTable'
import {getProducts, delProduct} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => (
    {
        getProducts: (username) => dispatch(getProducts(username)),
        delProduct: (id) => dispatch(delProduct(id)),
    }
)

export const ProductTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductTable));
