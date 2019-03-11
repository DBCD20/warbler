import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from "../store/actions/messages";
import {  MessageItem } from "../components/MessageItem";


class MessagesList extends Component {
    componentDidMount() {
      this.props.fetchMessages();
    }
    render() {
      const { messages } = this.props;
      let messageList = messages.map(m => (
        <MessageItem
          key={ m._id }
          date={ m.createdAt }
          text={ m.text }
          username={ m.user.username }
          profileImageUrl={ m.user.profileImageUrl }
        />
      ));
      return (
        <div className="bg-light" style={{width: "100%"}}>
          <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}> 
            <ul className="list-group" id="messages">
                {messageList}
            </ul>
          </div>
        </div>
      )
    }
  }
  
function mapStateToProps(state){
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, { fetchMessages })(MessagesList);