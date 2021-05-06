import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {TaskPage} from 'components/TaskPage/TaskPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const TaskPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskPage));
