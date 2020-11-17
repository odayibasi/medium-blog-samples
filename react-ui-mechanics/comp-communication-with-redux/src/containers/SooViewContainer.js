import {connect} from 'react-redux'
import SooView from '../components/SooView'
import {show, hide} from '../store/actions/VisibilityMode'


const mapStateToProps = state => ({
    visibilityMode: state.visibilityMode
})

const mapDispatchToProps = dispatch => (
    {
        showViews: () => dispatch(show()),
        hideViews: () => dispatch(hide()),

    }
)

export const SooViewContainer = connect(mapStateToProps, mapDispatchToProps)(SooView)