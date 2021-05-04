import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {OrganizationPage} from 'components/OrganizationPage/OrganizationPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const OrganizationPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(OrganizationPage));
