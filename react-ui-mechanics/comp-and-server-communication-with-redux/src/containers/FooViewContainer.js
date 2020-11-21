import {connect} from 'react-redux'
import FooView from '../components/FooView'


const mapStateToProps = state => ({
    visibilityMode: state.visibilityMode
})

const mapDispatchToProps = dispatch => (
    {
    }
)

export const FooViewContainer = connect(mapStateToProps, mapDispatchToProps)(FooView)