import React from 'react';
import MessageList from "../containers/MessageList";
import { UserAside } from "./UserAside";


export const MessageTimeline = props => {
    return (
        <div className="" style={{minHeight: "100vh", background: "linear-gradient(40deg, rgba(248,249,250,0.97), rgba(223,224,225,0.95))"}}>
            <div className="container d-md-flex col-12 col-md-8 col-lg-7 col-xl-6 justify-content-around" style={{padding: "6rem 0 5rem 0"}}>
                <UserAside profileImageUrl={ props.profileImageUrl } username={ props.username }/>
                <MessageList />
            </div>
            
        </div>
    )
}