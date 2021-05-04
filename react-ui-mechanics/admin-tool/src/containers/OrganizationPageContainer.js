import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {OrganizationPage} from 'components/OrganizationPage/OrganizationPage'
import {getOrganization} from "../store/actions";


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	getOrganization: () => dispatch(getOrganization()),
})

export const OrganizationPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(OrganizationPage));
