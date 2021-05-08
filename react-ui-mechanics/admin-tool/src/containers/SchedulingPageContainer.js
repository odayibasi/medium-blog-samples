import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {SchedulingPage} from 'components/SchedulingPage/SchedulingPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const SchedulingPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SchedulingPage));
