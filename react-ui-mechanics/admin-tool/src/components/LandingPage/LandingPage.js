import React from 'react';
import './LandingPage.scss'
import {LoginPanelContainer} from "containers";

export class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page-container'>
                <h1>Landing Page</h1>
                <LoginPanelContainer handlePageChange={this.props.handlePageChange}/>
                <div></div>
            </div>

        )
    }
}
