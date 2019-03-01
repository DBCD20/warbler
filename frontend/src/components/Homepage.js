import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = props => (
    <div className="homepage">
        <h1 className="display-1">What's Happening?</h1>
        <h4 className="h2 subtitle">New to Warbler?</h4>
        <Link to="/signup" className="btn btn-warning mx-auto d-block rounded-0">
            SIGN UP HERE
        </Link>
    </div>
)


export default Homepage;