import React from 'react';

export default function Card(props) {
	const { state, followers } = props;
	console.log(state);

	return (
		<div className='card-wrapper'>
			<div>
				{state ? (
					<>
						<div>Login: {state.login}</div>
						<div>Location: {state.location}</div>
						<div>Bio: {state.bio} </div>
						<div>Followers: {state.followers}</div>
						<div>Following: {state.following}</div>
					</>
				) : null}
			</div>
			<div>
				{followers
					? followers.map(user => {
							<div>
								<div>Login: {user.login}</div>
								<div>Location: {user.location}</div>
								<div>Bio: {user.bio}</div>
								<div>Followers: {user.followers}</div>
								<div>Following: {user.following}</div>
							</div>;
					  })
					: null}
			</div>
		</div>
	);
}
