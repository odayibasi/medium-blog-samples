import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {ListSelectionPage} from 'components/ListSelectionPage/ListSelectionPage'



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export const ListSelectionPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListSelectionPage));
