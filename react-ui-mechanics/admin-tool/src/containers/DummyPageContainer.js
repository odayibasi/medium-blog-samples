import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {DummyPage} from 'components/DummyPage/DummyPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const DummyPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(DummyPage));
