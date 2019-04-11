import React from 'react';
import MessageList from "../containers/MessageList";
import { UserAside } from "./UserAside";


export const MessageTimeline = props => {
    return (
        <div className="" id="MessageTimeline">
            <div className="container d-lg-flex col-12 col-md-8 col-lg-7 col-xl-6 justify-content-around" style={{padding: "6rem 0 5rem 0"}}>
                <UserAside profileImageUrl={ props.profileImageUrl } username={ props.username }/>
                <MessageList />
            </div>
            
        </div>
    )
}