import {connect} from 'react-redux'
import {HistoryPage} from 'components/HistoryPage/HistoryPage'
import {getUser, resetUser, addProduct} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
	user: state.user,
	products: state.products,
})

const mapDispatchToProps = dispatch => (
	{
		getUser: (username) => dispatch(getUser(username)),
		resetUser: () => dispatch(resetUser()),
		addProduct: (product) => dispatch(addProduct(product)),
	}
)

export const HistoryPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HistoryPage));
