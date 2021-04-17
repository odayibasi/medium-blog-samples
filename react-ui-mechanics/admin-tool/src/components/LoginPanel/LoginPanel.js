import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import {routes} from 'routes';
import './LoginPanel.scss';

export class LoginPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = () => {
        const {username} = this.state;
        this.props.getUser(username);
    }


    render() {

        const {users, fetching, fetched, error} = this.props.user;
        const {password} = this.state;

        if (fetched) {
            if (users.length > 0 && users[0].password === password) {
                return (
                    <div>
                        Login Başarılı
                    </div>
                )
            } else {
                this.props.history.push(routes.admin.path) //TODO This is not a god place to redireciton
                return (
                    <div>
                        Login Başarısız
                    </div>
                )
            }

        } else if (fetching) {
            return (
                <div>
                    Sunucuya Erişim Sağlanıyor ....
                </div>
            )
        } else if (error) {

            return (
                <div>
                    Sunucuya Erişimda Hata oluştu
                </div>
            )

        } else {

            return (
                <div>
                    <form className='login-panel-container' noValidate autoComplete="on">
                        <TextField required label="Username"
                                   onChange={(e) => this.setState({username: e.target.value})}/>
                        <TextField required label="Password" type="password" autoComplete="current-password"
                                   onChange={(e) => this.setState({password: e.target.value})}/>
                        <Button
                            onClick={(e) => this.handleLogin()}
                            variant="contained" color="primary">Login</Button>
                    </form>

                </div>
            );

        }


    }

}


