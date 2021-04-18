import React from 'react';
import {routes} from "routes";

export class AdminPage extends React.Component {

    handleLogout=()=>{
        this.props.resetUser();
        this.props.history.push(routes.landing.path);
    }


    render() {
        return (
            <div>
                Admin Page
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}
