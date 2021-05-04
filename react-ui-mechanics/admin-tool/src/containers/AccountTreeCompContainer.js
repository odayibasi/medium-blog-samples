import {connect} from 'react-redux'
import AccountTreeComp from 'components/OrganizationPage/parts/AccountTreeComp'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
	organization: state.organization,
})

const mapDispatchToProps = dispatch => (
	{}
)

export const AccountTreeCompContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountTreeComp));
