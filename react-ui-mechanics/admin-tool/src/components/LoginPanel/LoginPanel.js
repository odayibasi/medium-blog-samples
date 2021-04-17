import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
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
        const {username, password} = this.state;
        this.props.getUser(username);
        //this.props.handlePageChange(routes.admin.path)
    }

    render() {



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


