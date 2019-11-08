import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		axios
			.get('https://api.github.com/users/SFMack')
			.then(response => {
				this.setState({
					data: response.data
				});
			})
			.catch(error => {
				console.log('ERROR:: ', error);
			});
	}

	render() {
		return <div className='App'>Hello, </div>;
	}
}
