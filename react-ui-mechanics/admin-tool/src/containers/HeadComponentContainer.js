import {connect} from 'react-redux'
import HeadComponent from 'components/OrganizationPage/parts/HeadComponent'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
	organization: state.organization,
})

const mapDispatchToProps = dispatch => (
	{}
)

export const HeadCompnentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeadComponent));
