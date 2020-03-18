import React from 'react';

export default function Card(props) {
	const { state } = props;
	console.log(state);

	return (
		<div className='card-wrapper'>
			{state ? (
				<>
					<div>Login: {state.login}</div>
					<div>Location: {state.location}</div>
					<div>Bio: {state.bio} </div>
					<div>Follower: {state.followers}</div>
					<div>Following: {state.following}</div>
				</>
			) : null}
		</div>
	);
}
