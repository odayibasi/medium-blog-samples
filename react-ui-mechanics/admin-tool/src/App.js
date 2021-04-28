import {LandingPageContainer, DummyPageContainer, AdminPageContainer} from 'containers';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from 'routes';
import './App.css';

class App extends React.Component {


	render() {
		const {landing, admin, dummy} = routes;
		return (
			<div className="App">
				<Switch>
					<Route exact path={landing.path}><LandingPageContainer/></Route>
					<Route exact path={admin.path}><AdminPageContainer/></Route>
					<Route exact path={dummy.path}><DummyPageContainer/></Route>
				</Switch>
			</div>
		);
	}

}

export default App;
