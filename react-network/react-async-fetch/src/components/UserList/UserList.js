import React, {Component} from 'react';

export class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userList: []
		}
	}


	handleFetchUser = () => {
		fetch('http://localhost:3004/users')
			.then(response => response.json())
			.then(data => this.setState({userList: data}))
			.catch(function (error) {
				console.log('Request failed', error)
			});
	}


	handleFetch404Error = () => {
		fetch('http://localhost:3004/usersA')
			.then(response => {
				if (response.ok) {
					return response.json()
				} else if (response.status === 404) {
					return Promise.reject('error 404')
				} else {
					return Promise.reject('some other error: ' + response.status)
				}
			})
			.then(response => response.json())
			.then(data => this.setState({userList: data}))
			.catch(function (error) {
				console.log('Request failed', error)
			});
	}

	handleFetchUserAndMeetings = () => {

	}


	render() {

		const {userList} = this.state;
		const userVDOM = userList.map(el => {
			return (<div key={el.id}>
				<span>{el.username}</span>
				<span>{el.age}</span>
			</div>)
		})

		return (
			<div>
				<button onClick={this.handleFetchUser}>Fetch Users</button>
				<button onClick={this.handleFetch404Error}>Fetch 404</button>
				{userVDOM}
			</div>
		)
	}


}