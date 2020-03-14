import React from 'react'


function Message(props) {
        return (
            <div className="messageComponent">
            <div className="messages_SenderID"> {props.username} </div>
            <div className="messages_Text"> {props.text}</div>
            </div>
        )

}

export default Message