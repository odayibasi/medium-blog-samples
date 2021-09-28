import React, {Component} from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage";
import {Link, Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import UsersPage from "./pages/UsersPage";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        MySample Project
        <Link to={routes.main.path}>{routes.main.title}</Link>
        <Link to={routes.users.path}>{routes.users.title}</Link>
        <Switch>
          <Route exact path={routes.main.path}><MainPage/></Route>
          <Route path={routes.users.path}><UsersPage {...this.props}/></Route>
        </Switch>
      </div>
    );

  }
}

export default App;
