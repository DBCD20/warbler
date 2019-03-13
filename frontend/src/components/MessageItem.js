import Moment from "react-moment";
import React from 'react';
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.png";

export const MessageItem = ({ CorrectUser, date, profileImageUrl, text, username, removeThisMessage }) => (

        <li className="list-group-item my-2 mx-auto d-flex bg-white border-0" style={{maxWidth: "100%", width: "500px"}}>
            <img
                src={ profileImageUrl || DefaultProfileImg }
                alt={ username }
                height="80"
                width="80"
                style={{borderRadius: "100%"}}
                />
            <div className="message-area px-4">
                <Link to='/'> <span style={{color: "#2C7ECC", fontWeight: "730"}}>@{ username } &nbsp;</span></Link>
                <span className="pb-3" style={{color: "#CCD0CE"}}>
                    <Moment className="small" format="MMMM Do YYYY, hh:mm a">
                        { date }
                    </Moment>
                </span>
                <div className='text-dark'>{ text }</div>
                {   CorrectUser && (
                    <a className="position-absolute delete-btn" onClick={ removeThisMessage }><i class="far fa-trash-alt"></i></a>
                )}
                
            </div>
        </li>

    
)