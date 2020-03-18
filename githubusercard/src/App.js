import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Components/Card.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount = () => {
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
	};

	render() {
		const { data } = this.state;

		return (
			<div className='App'>
				<Card state={data} />
			</div>
		);
	}
}
