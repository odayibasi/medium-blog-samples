import {
	LandingPageContainer,
	DummyPageContainer,
	AdminPageContainer,
	HistoryPageContainer,
	FeedbackPageContainer
} from 'containers';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from 'routes';
import './App.css';
import {DashboardPageContainer} from "./containers/DashboardPageContainer";

class App extends React.Component {


	render() {
		const {landing, admin, dummy,history,dashboard,feedback} = routes;
		return (
			<div className="App">
				<Switch>
					<Route exact path={landing.path}><LandingPageContainer/></Route>
					<Route exact path={admin.path}><AdminPageContainer/></Route>
					<Route exact path={dummy.path}><DummyPageContainer/></Route>
					<Route exact path={history.path}><HistoryPageContainer/></Route>
					<Route exact path={dashboard.path}><DashboardPageContainer/></Route>
					<Route exact path={feedback.path}><FeedbackPageContainer/></Route>
				</Switch>
			</div>
		);
	}

}

export default App;
