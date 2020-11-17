import {connect} from 'react-redux'
import DooView from '../components/DooView'
import {show, hide} from '../store/actions/VisibilityMode'


const mapStateToProps = state => ({
    visibilityMode: state.visibilityMode
})

const mapDispatchToProps = dispatch => (
    {
    }
)

export const DooViewContainer = connect(mapStateToProps, mapDispatchToProps)(DooView)