import {connect} from 'react-redux'
import AccountTreeComp from 'components/OrganizationPage/parts/AccountTreeComp'
import {withRouter} from "react-router";
import {selectOrganizationNode, addNodeToOrganization, delNodeFromOrganization} from "../store/actions";


const mapStateToProps = state => ({
	organization: state.organization,
})

const mapDispatchToProps = dispatch => (
	{
		selectOrganizationNode: (node) => dispatch(selectOrganizationNode(node)),
		addNodeToOrganization: (parentNodeId, node) => dispatch(addNodeToOrganization(parentNodeId, node)),
		delNodeFromOrganization: (parentNodeId, node) => dispatch(delNodeFromOrganization(parentNodeId, node)),
	}
)

export const AccountTreeCompContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountTreeComp));
