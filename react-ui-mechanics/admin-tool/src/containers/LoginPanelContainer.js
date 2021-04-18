import {connect} from 'react-redux'
import {LoginPanel} from 'components/LoginPanel/LoginPanel'
import {getUser, resetUser} from 'store/actions'
import {withRouter} from "react-router";


const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => (
    {
        getUser: (username) => dispatch(getUser(username)),
        resetUser: () => dispatch(resetUser()),
    }
)

export const LoginPanelContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPanel));
