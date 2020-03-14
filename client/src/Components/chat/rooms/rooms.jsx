import React, {Component} from 'react'
import './rooms.css'

class RoomList extends Component{

   
    render(){
        console.log(this.props.rooms)
        const orderedRooms = [...this.props.rooms].sort((a,b)=> a.id - b.id)

        return (
            <div className = "roomListComponent">
                <ul>
                    <h4>Rooms</h4>
                {orderedRooms.map(room=>{
                    const active = this.props.roomId === room.id?  "active": ""
                    return (
                    <li key={room.id} className= {"room" + active}>
                        {/* <a  onClick = {()=>this.props.subscribeToRoom(room.id)}
                        href="#"># {room.name}</a> */}

<button type="button" className="link-button" 
  onClick = {()=>this.props.subscribeToRoom(room.id)}> # {room.name}
</button>
                    </li>
                  )})}
</ul>
            </div>
        )
    }

}

export default RoomList