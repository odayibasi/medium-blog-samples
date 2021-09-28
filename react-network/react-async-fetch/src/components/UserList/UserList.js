import React, {Component} from 'react';

export class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userList: []
		}
	}


	handleFetchUser = () => {
		fetch(`http://localhost:3004/users`)
			.then(response => response.json())
			.then(data => this.setState({userList: data}))
			.catch(function (error) {
				console.log('Request failed', error)
			});
	}

	handleFetchUserMeetings = () => {
		fetch(`http://localhost:3004/users`)
			.then(response => response.json())
			.then(data => this.setState({userList: data}, () => {
				if (Array.isArray(data)) {
					data.filter(el => el.age > 40).forEach(el => {
						fetch(`http://localhost:3004/users/${el.id}`)
							.then(response => response.json())
							.then(data => console.log('meetings', data.meetings))

					})
				}
			}))
			.catch(function (error) {
				console.log('Request failed', error)
			});
	}


	handleFetchUserMeetingsAsync = () => {
		fetch(`http://localhost:3004/users`)
			.then(response => response.json())
			.then(data => this.setState({userList: data}, () => {
				const arrFetch = data.filter(el => el.age > 40).map(el => {
					return fetch(`http://localhost:3004/users/${el.id}`).then(response => response.json())
				})
				Promise.all(arrFetch).then(responseValues=>{
					console.log(responseValues);
				})
			}))
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
				<button onClick={this.handleFetchUserMeetings}>Fetch User age>40 Meetings</button>
				<button onClick={this.handleFetchUserMeetingsAsync}>Fetch User age>40 Meetings Async</button>
				{userVDOM}
			</div>
		)
	}


}