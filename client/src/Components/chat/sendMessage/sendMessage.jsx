import React, {Component} from 'react'
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
                <form className="SendMessageForm" onSubmit={this.handleSubmit}>
                <input
                disabled= {this.props.disabled} type ="text" placeholder="Type Message and Hit ENTER" onChange={this.handleChange} name="message"
                value={this.state.message}></input>
                </form>
            </div>
        )
    }

}

export default SendMessage