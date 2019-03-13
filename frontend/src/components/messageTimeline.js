import React from 'react';
import MessageList from "../containers/MessageList";
import { UserAside } from "./UserAside";


export const MessageTimeline = props => {
    return (
        <div className="row bg-light">
            <div className="container d-md-flex col-12 col-md-8 col-lg-7 col-xl-6 justify-content-around" style={{height: "100vh", paddingTop: "5rem"}}>
                <UserAside profileImageUrl={ props.profileImageUrl } username={ props.username }/>
                <MessageList />
            </div>
            
        </div>
    )
}