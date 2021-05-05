import {connect} from 'react-redux'
import ContentComp from 'components/OrganizationPage/parts/ContentComp'
import {withRouter} from "react-router";
import {updateOrganizationNode} from "../store/actions";


const mapStateToProps = state => ({
	organization: state.organization,
})

const mapDispatchToProps = dispatch => (
	{
		updateOrganizationNode: (node) => dispatch(updateOrganizationNode(node)),

	}
)

export const ContentCompContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentComp));
