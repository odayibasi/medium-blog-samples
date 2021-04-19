import {connect} from 'react-redux'
import {ProductTable} from 'components/ProductTable/ProductTable'
import {getProducts} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => (
    {
        getProducts: (username) => dispatch(getProducts(username)),
    }
)

export const ProductTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductTable));
