import {connect} from 'react-redux'
import GitFetchView from '../components/GitFetchView'
import {getGitUser} from '../store/actions/GitUser'


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
    {
        getGitUser: (gitName) => dispatch(getGitUser(gitName)),

    }
)

export const GitFetchViewContainer = connect(mapStateToProps, mapDispatchToProps)(GitFetchView)