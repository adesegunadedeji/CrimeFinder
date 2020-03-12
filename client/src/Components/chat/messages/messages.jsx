import React, {Component} from 'react'

const DUMMY_DATA = [
    {
        senderId: "Tamara",
        text: "Hey how is it going"
},
{
    senderId: "Jane Doe",
    text: "Not much"
},

{
    senderId: "Tamara",
    text: "We should grab drinks later today",
}
]

class Messages extends Component{

    render(){
        return (
            <div className="messagesComponent">
                {DUMMY_DATA.map((message, index)=>{
                    return (
                        <div className="messages" key={index}>
                            <h2 className="messages_SenderID"> {message.senderId} </h2>
                            <div className="messages_Text"> {message.text}</div>
                        </div>
                    )})}
            </div>
        )
    }
}

export default Messages