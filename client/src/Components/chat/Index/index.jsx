import React, {Component} from 'react'
import NavbarComp from '../../Home/NavbarComp'
import MessageList from '../messages/MessageList';
  import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import SendMessage from '../sendMessage/sendMessage';
import RoomList from '../rooms/rooms';
import NewRoom from '../newRoom/newRoom';
import './index.css'

class Index extends Component{
    constructor(){
        super();
        this.state ={
           messages: [],
           joinableRooms: [],
           alreadyJoinedRooms: [],
           roomId: null
        }
        this.sendMessage= this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getJoinableRooms = this.getJoinableRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    }

 componentDidMount(){
    console.log("test")
    const chatManager = new ChatManager({
        instanceLocator: `${process.env.REACT_APP_CHATKIT_instance}`,
        userId: 'Admin',
        tokenProvider: new TokenProvider({ 
            url:  `${process.env.REACT_APP_CHATKIT_token}`
         })
          }) 
          chatManager.connect().then(currentUser => {

            this.currentUser = currentUser
            this.getJoinableRooms()
            //this.subscribeToRoom()

          }).catch(err => {
                    console.log('Error on connection', err)
                  })
                }


//getJoinableRooms Method
getJoinableRooms(){
    this.currentUser.getJoinableRooms().then(
        joinableRooms=>{
            this.setState({
                joinableRooms,
                alreadyJoinedRooms: this.currentUser.rooms
            })

        }
    ).catch(err => {
        console.log('Error on Joinable Rooms', err)
      })

}

//SubscribeToRoom Method
subscribeToRoom(roomId){
    this.setState({
        messages: []
    })
    this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks:{
            onMessage: message =>{
                console.log( "Message.text", message.text)
                this.setState({
                    messages: [...this.state.messages, message]
                })
            }
        }
    })
    .then(room=>{
        this.setState({
            roomId: room.id
        })
        this.getJoinableRooms()
    })
    .catch(err => {
        console.log('Error on connection', err)
    })
}

//Send Message Key
    sendMessage (text){
        this.currentUser.sendMessage({
            text, //can Omit because key and value are the same key: key = > text: text
            roomId: this.state.roomId
            //'b7dcf8e3-a135-430a-9716-54031b027ef4'
        })
    }

    //CreateRoom Method;
    createRoom(roomName){
        this.currentUser.createRoom({
            name: roomName,
        }).then(room => this.subscribeToRoom(room.id)).catch(
            err => {
                console.log("Err with Create Room Method", err)
            }
        )

    }
    render(){
        console.log("this.state.messages:",this.state.messages)
        return(
            <div className="indexComponent">
                {/* <NavbarComp/> */}
                <MessageList messages={this.state.messages}
                roomId={this.state.roomId}/>
                <SendMessage 
                disabled={!this.state.roomId}
                sendMessage ={this.sendMessage}/>
                <RoomList roomId = {this.state.roomId}
                subscribeToRoom={this.subscribeToRoom}
                rooms = {[...this.state.joinableRooms, ...this.state.alreadyJoinedRooms]}/>
                <NewRoom createRoom={this.createRoom}/>
               
            </div>
        )
    }
}


export default Index