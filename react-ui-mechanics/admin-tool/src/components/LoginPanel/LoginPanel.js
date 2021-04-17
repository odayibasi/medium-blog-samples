import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";
import {routes} from "routes";
import './LoginPanel.scss';

export class LoginPanel extends React.Component {

    render() {

        return (
            <div>
                <form className='login-panel-container' noValidate autoComplete="on">
                    <TextField required label="Username"/>
                    <TextField required label="Password" type="password" autoComplete="current-password"/>
                    <Button
                        onClick={(e) => this.props.handlePageChange(routes.admin.path)}
                        variant="contained" color="primary">Login</Button>
                </form>

            </div>
        );

    }

}


