import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.png';

export const UserAside = ({ profileImageUrl, username }) => (
    <aside className="col-12 col-md-8 col-lg-5 my-1 pr-md-3 mx-auto align-self-start">

            <div className="card border-0 mx-auto" style={{maxWidth: '500px'}}>
                <img src={ profileImageUrl || DefaultProfileImg } alt={ username } style={{objectFit: "cover"}} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center text-dark"> @{ username } </h5>
                </div>
            </div>

    </aside>
)

export default UserAside;