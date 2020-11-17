import {connect} from 'react-redux'
import FooView from '../components/FooView'
import {show, hide} from '../store/actions/VisibilityMode'


const mapStateToProps = state => ({
    visibilityMode: state.visibilityMode
})

const mapDispatchToProps = dispatch => (
    {
    }
)

export const FooViewContainer = connect(mapStateToProps, mapDispatchToProps)(FooView)