import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Message from './message'
class MessageList extends Component{

componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this);
   this.scrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight

}
    componentDidUpdate(){
        if (this.scrollToBottom){
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop  = node.scrollHeight
        }
        
    }

    render(){
        if(!this.props.roomId){
            return(
                <div className="messageListComponent">
                <div className="join-room">

                    &rarr; Join a Room!
                </div>

                </div>
            )
        }
        return (
            <div className="messageListComponent">
                {this.props.messages.map((message, index)=>{
                    return (
                        // <div className="messageList">
                        <Message key={index} username={message.senderId} text = {message.text}/>
                    )})}
            </div>
        )
    }
}

export default MessageList