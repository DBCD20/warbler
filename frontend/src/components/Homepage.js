import React from 'react';
import { Link } from 'react-router-dom';
import { MessageTimeline } from "./messageTimeline";



const Homepage = ({ currentUser }) => {
    if( !currentUser.isAuthenticated ){
        return (
        <div className="container d-flex align-items-center" style={{height: '100%'}}>
            <div className="homepage">
                <h1 className="display-4">What's Happening?</h1>
                <h4 className="h2 subtitle mx-auto">New to Warbler?</h4>
                <Link to="/signup" className="linkBtn btn btn-warning mx-auto d-block rounded-0">
                    SIGN UP HERE
                </Link>
            </div>
        </div>
            
    )};
    return (
        <MessageTimeline 
            profileImageUrl={ currentUser.user.profileImageUrl }
            username={ currentUser.user.username }
        />
    )

    }


export default Homepage;