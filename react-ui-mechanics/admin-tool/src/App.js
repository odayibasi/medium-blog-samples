import {LandingPage, AdminPage} from 'components';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from 'routes';
import './App.css';

class App extends React.Component {


    render() {
        const {landing, admin} = routes;
        return (
            <div className="App">
                    <Switch>
                        <Route exact path={landing.path}><LandingPage/></Route>
                        <Route exact path={admin.path}><AdminPage/></Route>
                    </Switch>
            </div>
        );
    }

}

export default App;
