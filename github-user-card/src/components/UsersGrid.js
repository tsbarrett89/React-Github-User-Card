import React from 'react';

import UserCard from './UserCard';
import FollowersCard from './FollowersCard';

import { FollowerGridStyle } from './styling';

const UsersGrid = props => {


    return(
        <div>
            <UserCard 
                key={props.user.created_at}
                name={props.user.name}
                username={props.user.login}
                image={props.user.avatar_url}
            />
            <h2>Followers</h2>
            <FollowerGridStyle>
                {props.followers.map(follower => (
                    <FollowersCard 
                        key={follower.created_at}
                        name={follower.name}
                        username={follower.login}
                        image={follower.avatar_url}
                    />
                ))}
            </FollowerGridStyle>

        </div>
    )
}

export default UsersGrid