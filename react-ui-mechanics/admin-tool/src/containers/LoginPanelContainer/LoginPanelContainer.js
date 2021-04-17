import {connect} from 'react-redux'
import {LoginPanel} from 'components/LoginPanel/LoginPanel'
import {getUser} from 'store/actions'


const mapStateToProps = state => ({
    users: state.users,
})

const mapDispatchToProps = dispatch => (
    {
        getUser: (username) => dispatch(getUser(username)),

    }
)

export const LoginPanelContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPanel)
