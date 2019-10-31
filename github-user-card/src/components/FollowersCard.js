import React from 'react';

import { UserCardStyle } from './styling';

const FollowersCard = props => {
    return(
        <UserCardStyle key={props}>
            <h2>{props.name}</h2>
            <h4>{props.username}</h4>
            <img src={props.image} alt={props.username} />
        </UserCardStyle>
    )
}

export default FollowersCard