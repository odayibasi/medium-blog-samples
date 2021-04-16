import React from 'react';
import {routes} from "routes";

export class AdminPage extends React.Component {
    render() {
        return (
            <div>
                Admin Page
                <button onClick={(e) => this.props.handlePageChange(routes.landing.path)}>Logout</button>
            </div>
        )
    }
}
