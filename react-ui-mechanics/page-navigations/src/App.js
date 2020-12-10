import './App.css';
import React from 'react';
import {LoginPage} from "./components/LoginPage";
import {MainPage} from "./components/MainPage";
import {SettingsPage} from "./components/SettingsPage";
import {CompanyPageWithRouter} from "./components/CompanyPage";
import {CompanyUserPageWithRouter} from "./components/ComponyUserPage";

import {createBrowserHistory} from 'history';


import {
    Switch,
    Route,
    Router,
    Link,
} from "react-router-dom";

import {routes} from './routes'


const history = createBrowserHistory();


class App extends React.Component {

    constructor(props) {
        super(props);
    }


    handlePageChange = (activePage) => {
        history.push(activePage);
    }


    renderNavMenu = () => {

        const {login, main, settings} = routes;

        return (
            <>
                <ul>
                    <li>
                        <Link to={login.path}>{login.title}</Link>
                    </li>
                    <li>
                        <Link to={main.path}>{main.title}</Link>
                    </li>
                    <li>
                        <Link to={settings.path}>{settings.title}</Link>
                    </li>
                </ul>

                <hr/>
            </>


        )
    }

    render() {

        const {login, main, settings,company,companyUsers} = routes;
        return (
            <div className="App">


                <Router history={history}>
                    {this.renderNavMenu()}
                    <Switch>
                        <Route exact path={login.path}>
                            <LoginPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={main.path}>
                            <MainPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={settings.path}>
                            <SettingsPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={company.path}>
                            <CompanyPageWithRouter handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={companyUsers.path}>
                            <CompanyUserPageWithRouter handlePageChange={this.handlePageChange}/>
                        </Route>
                    </Switch>
                </Router>

            </div>);
    }
}


export default App;



