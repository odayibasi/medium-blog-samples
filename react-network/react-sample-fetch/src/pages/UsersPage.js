import React, {Component} from 'react';
import {routes} from "../routes";
import {Route, withRouter} from "react-router-dom";

const UISTATE = {
	initial: 'inital',
	fetching: 'fetching',
	fetched: 'fetched',
	error: 'error',
}


class UserPage extends Component {

	render() {
		const {username} = this.props.match.params;

		return (
			<div>{username}</div>
		)
		
	}

}


class UsersPageUI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userText: undefined,
			userList: [],
			status: UISTATE.initial,
			errorMsg: '',
		}
		this.timeoutId = 0;
	}

	fetchUsers = (userText) => {
		this.setState({status: UISTATE.fetching})
		fetch(`http://localhost:3004/users/`)
			.then(response => response.json())
			.then(data => this.setState({userList: data, status: UISTATE.fetched}))
			.catch(error => this.setState({status: UISTATE.error, errorMsg: error}));
	}


	handleOnChange = (e) => {
		const value = e.target.value;
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
			this.timeoutId = 0;
		}

		this.setState({userText: value});
		this.timeoutId = setTimeout(() => {
			this.fetchUsers(this.state.userText);
		}, 500)


	}


	handleUsersClick = (username) => {
		const {match} = this.props;
		this.props.history.push(`${match.path}/${username}`);
	}

	render() {

		const {userList, status} = this.state;
		const {match} = this.props;
		const userVDOM = userList.map(el => <div onClick={() => this.handleUsersClick(el.username)}>
			<b>{el.username}:</b>{el.age}</div>)

		const childPath = `${match.path}/:username`;
		return (
			<div>
				{routes.users.title};
				<input type='text' onChange={this.handleOnChange}/>
				{status === UISTATE.fetched && <div>{userVDOM}</div>}
				{status === UISTATE.fetching && <div>Loading...</div>}
				{status === UISTATE.error && <div>Error...</div>}


				<Route exact path={childPath}>
					<UserPage {...this.props}/>
				</Route>
			</div>
		)


	}

}


const UsersPage = withRouter(UsersPageUI);
export default UsersPage;