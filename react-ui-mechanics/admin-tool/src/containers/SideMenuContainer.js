import {connect} from 'react-redux'
import {SideMenu} from 'components/SideMenu/SideMenu'
import {resetUser} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
	{
		resetUser: () => dispatch(resetUser()),
	}
)

export const SideMenuContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SideMenu));
