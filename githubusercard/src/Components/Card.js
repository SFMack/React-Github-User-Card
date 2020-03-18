import React from 'react';

export default function Card(props) {
	const { state } = props;
	console.log(state);

	return (
		<div className='card-wrapper'>
			<div>Login</div>
		</div>
	);
}

// export default class Card extends Component {
// 	constructor() {
// 		super();
// 		this.state = {};
// 	}

// 	render() {
// 		const { state } = this.props;
// 		console.log(state);

// 		return (

// 		);
// 	}
// }
