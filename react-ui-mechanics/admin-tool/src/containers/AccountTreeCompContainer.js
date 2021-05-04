import {connect} from 'react-redux'
import AccountTreeComp from 'components/OrganizationPage/parts/AccountTreeComp'
import {withRouter} from "react-router";
import {selectOrganizationNode} from "../store/actions";


const mapStateToProps = state => ({
	organization: state.organization,
})

const mapDispatchToProps = dispatch => (
	{
		selectOrganizationNode: (node) => dispatch(selectOrganizationNode(node)),
	}
)

export const AccountTreeCompContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountTreeComp));
