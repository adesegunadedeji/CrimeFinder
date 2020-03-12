import React, {Component} from 'react'
import NavbarComp from '../../Home/NavbarComp'
import Messages from '../messages/messages';
  import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

class Index extends Component{
    constructor(){
        super();
        this.state ={
            test: ""
        }
    }


 componentDidMount(){
    console.log("test")
    const chatManager = new ChatManager({
        instanceLocator: `${process.env.REACT_APP_CHATKIT_instance}`,
        userId: 'Adedeji',
        tokenProvider: new TokenProvider({ 
            url:  `${process.env.REACT_APP_CHATKIT_token}`
         })
          })
          chatManager.connect().then(currentUser => {
            console.log('Successful connection', currentUser)
            currentUser.subscribeToRoom({
                roomId: 'b7dcf8e3-a135-430a-9716-54031b027ef4',
                hooks:{
                    onNewMessage: message =>{
                        console.log( "Message.text",message.text)
                    }
                }
            })

          }).catch(err => {
                    console.log('Error on connection', err)
                  })
          
        //   .then(currentUser => 
        //     {
           
        //   }).catch(err => {
        //     console.log('Error on connection', err)
        //   })
        }
       // chatManager.connect()

  

    render(){
        return(
            <div>
                <NavbarComp/>
                <Messages/>
            </div>
        )
    }
}


export default Index