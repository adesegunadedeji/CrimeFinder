import React from 'react'
import './message.css'

function Message(props) {
        return (
            <div className="messageComponent">
            <div className="messages_SenderID"><span>{props.username}</span></div>
            <div className="messages_Text"><span> {props.text}</span></div>
            </div>
        )

}

export default Message