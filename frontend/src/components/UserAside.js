import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.png';

export const UserAside = ({ profileImageUrl, username }) => (
    <aside className="col-md-5 my-1 px-0 pr-md-3 align-self-start">

            <div className="card border-0 mx-auto" style={{maxWidth: '500px'}}>
                <img src={ profileImageUrl || DefaultProfileImg } alt={ username } className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center text-dark"> @{ username } </h5>
                </div>
            </div>

    </aside>
)

export default UserAside;