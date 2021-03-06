import {connect} from 'react-redux'
import {AdminPage} from 'components/AdminPage/AdminPage'
import {getUser, resetUser, addProduct, addHistoryItem} from 'store/actions'
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
		addHistoryItem: (historyItem) => dispatch(addHistoryItem(historyItem))
	}
)

export const AdminPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));
