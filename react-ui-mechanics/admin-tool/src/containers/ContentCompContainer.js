import {connect} from 'react-redux'
import ContentComp from 'components/OrganizationPage/parts/ContentComp'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
	organization: state.organization,
})

const mapDispatchToProps = dispatch => (
	{}
)

export const ContentCompContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentComp));
