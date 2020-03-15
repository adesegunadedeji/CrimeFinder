import React, {Component} from 'react'
import './sendMessage.css'
class SendMessage extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    //HANDLECHANGE EVENT LISTENER
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     //HANDLESUBMIT EVENT LISTENER
    //  handleSubmit(e){
         
    //  }

     handleSubmit = (e)=>{
         e.preventDefault();
        //console.log('SUBMIT FORM', this.state.message)
         this.props.sendMessage(this.state.message)
         this.setState({
             message: ''
         })

     }

    render(){
        return (
            <div className="sendMessageComponent">
                <form className="sendMessageForm" onSubmit={this.handleSubmit}>
                <input
                disabled= {this.props.disabled} type ="text" placeholder="Type message and hit Enter" className="sendMessageInput" onChange={this.handleChange} name="message"
                value={this.state.message}></input>
                </form>
            </div>
        )
    }

}

export default SendMessage