import './App.css';
import React from 'react';
import {LoginPage} from "./components/LoginPage";
import {MainPage} from "./components/MainPage";
import {SettingsPage} from "./components/SettingsPage";


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();


class App extends React.Component {

    constructor(props) {
        super(props);
    }


    handlePageChange = (activePage) => {
        history.replace(activePage);
    }


    render() {


        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/settings">
                            <SettingsPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path="/main">
                            <MainPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path="/">
                            <LoginPage handlePageChange={this.handlePageChange}/>
                        </Route>
                    </Switch>
                </Router>
            </div>);
    }
}

export default App;
