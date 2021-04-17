import React from 'react';
import {LoginPanel} from '../LoginPanel/LoginPanel'
import './LandingPage.scss'
import {routes} from "../../routes";

export class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page-container'>
                <LoginPanel handlePageChange={this.props.handlePageChange}/>
            </div>

        )
    }
}
