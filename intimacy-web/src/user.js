import React, { Component } from 'react';
import Contacts from './components/contacts';

class User extends Component {
	state = {
		contacts:[]
	}
	componentDidMount() {

		let url = 'http://localhost:8080/user/getAllUser';
		let username = 'hari';
		let password = 'hari';

		let headers = new Headers();

		headers.append('Content-Type', 'text/json');
		headers.set('Authorization', 'Basic ' + window.btoa(username + ':' + password));

		fetch(url, {
			method: 'GET',
			headers: headers
		}).then(res => res.json())
			.then((data) => {
				this.setState({ contacts: data.sucess })
				console.log("sfsfs" + data.sucess);
			})
			.catch(console.log)
	}
	render() {
		return (
			<div>
				<Contacts contacts={this.state.contacts} />
			</div>
		)
	}
}

export default User;