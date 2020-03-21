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
		let getMyData = 'https://api.github.com/users/SFMack';
		let getMyFollowers = 'https://api.github.com/users/SFMack/followers';

		let dataRequest = axios.get(getMyData);
		let followersRequest = axios.get(getMyFollowers);

		axios
			.all([dataRequest, followersRequest])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];

					this.setState({
						data: responseOne.data,
						followers: responseTwo.data
					});
				})
			)
			.catch(error => {
				console.log('ERROR: ', error);
			});
	};

	render() {
		const { data, followers } = this.state;

		return (
			<div className='App'>
				<Card state={data} followers={followers} />
			</div>
		);
	}
}
