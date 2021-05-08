import {
	LandingPageContainer, DummyPageContainer, AdminPageContainer,
	HistoryPageContainer, FeedbackPageContainer, OrganizationPageContainer,
	DashboardPageContainer, ListSelectionPageContainer, TaskPageContainer,
	SchedulingPageContainer, GanttChartPageContainer
} from 'containers';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from 'routes';
import './App.css';

class App extends React.Component {


	render() {
		const {landing, admin, dummy, history, dashboard, 
			feedback, organization, listselection,task, scheduling,gantt} = routes;
		return (
			<div className="App">
				<Switch>
					<Route exact path={landing.path}><LandingPageContainer/></Route>
					<Route exact path={admin.path}><AdminPageContainer/></Route>
					<Route exact path={dummy.path}><DummyPageContainer/></Route>
					<Route exact path={history.path}><HistoryPageContainer/></Route>
					<Route exact path={dashboard.path}><DashboardPageContainer/></Route>
					<Route exact path={feedback.path}><FeedbackPageContainer/></Route>
					<Route exact path={organization.path}><OrganizationPageContainer/></Route>
					<Route exact path={listselection.path}><ListSelectionPageContainer/></Route>
					<Route exact path={task.path}><TaskPageContainer/></Route>
					<Route exact path={scheduling.path}><SchedulingPageContainer/></Route>
					<Route exact path={gantt.path}><GanttChartPageContainer/></Route>
				</Switch>
			</div>
		);
	}

}

export default App;
