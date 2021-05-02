import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {FeedbackPage} from 'components/FeedbackPage/FeedbackPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const FeedbackPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackPage));
