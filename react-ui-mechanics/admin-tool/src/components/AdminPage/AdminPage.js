import React from 'react';
import {routes} from "routes";
import {ProductTable} from "../ProductTable/ProductTable";

export class AdminPage extends React.Component {

    handleLogout = () => {
        this.props.resetUser();
        this.props.history.push(routes.landing.path);
    }


    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <button onClick={this.handleLogout}>Logout</button>
                <ProductTable/>
            </div>
        )
    }
}
