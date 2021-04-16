import './App.css';
import {LandingPage, AdminPage} from 'components';

import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import {routes} from 'routes';

const history = createBrowserHistory({forceRefresh: false});

class App extends React.Component {

    handlePageChange = (activePage) => {
        history.push(activePage);
    }

    render() {
        const {landing, admin} = routes;
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path={landing.path}>
                            <LandingPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={admin.path}>
                            <AdminPage handlePageChange={this.handlePageChange}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }

}

export default App;
