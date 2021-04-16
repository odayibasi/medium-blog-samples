import React from 'react';
import {routes} from 'routes';

export class LandingPage extends React.Component {
    render() {
        return (
            <div>
                Landing Page
                <button onClick={(e) => this.props.handlePageChange(routes.admin.path)}>Login</button>
            </div>

        )
    }
}
