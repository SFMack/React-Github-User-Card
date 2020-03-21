import React from 'react';

export default function Card(props) {
	const { state, followers } = props;
	console.log(typeof followers);

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
				{/* {followers
					? followers.map(follower => {
							<div>
								<div>Login: {follower.login}</div>
								<div>Location: {follower.location}</div>
								<div>Bio: {follower.bio}</div>
								<div>Followers: {follower.followers}</div>
								<div>Following: {follower.following}</div>
							</div>;
					  })
					: null} */}
			</div>
		</div>
	);
}
