import Moment from "react-moment";
import React from 'react';
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.png";

export const MessageItem = ({ date, profileImageUrl, text, username }) => (

        <li className="list-group-item my-1 mx-auto d-flex bg-white border-0" style={{maxWidth: "100%", width: "500px"}}>
            <img
                src={ profileImageUrl || DefaultProfileImg }
                alt={ username }
                height="100"
                width="100"
                />
            <div className="message-area px-4">
                <Link to='/'> @{ username } &nbsp;</Link>
                <span className="pb-3">
                    <Moment className="text-muted small" format="MMMM Do YYYY, hh:mm a">
                        { date }
                    </Moment>
                </span>
                <div className='text-dark'>{ text }</div>
            </div>
        </li>

    
)