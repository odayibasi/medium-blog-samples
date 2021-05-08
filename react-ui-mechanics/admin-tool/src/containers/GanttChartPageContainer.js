import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {GanttChartPage} from 'components/GanttChartPage/GantChartPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const GanttChartPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(GanttChartPage));
