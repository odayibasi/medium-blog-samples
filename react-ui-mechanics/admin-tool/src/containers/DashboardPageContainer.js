import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {DashboardPage} from 'components/DashboardPage/DashboardPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const DashboardPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardPage));
