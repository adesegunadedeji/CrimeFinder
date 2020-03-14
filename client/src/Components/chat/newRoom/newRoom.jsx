import React, {Component} from 'react'
import './newRoom.css'

class NewRoom extends Component{
    constructor(){
        super();
        this.state={
            roomName : ""
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createRoom(this.state.roomName)
        this.setState({
            roomName: ""
        })
    }
    render(){
        return (
            <div className = "newRoomComponent">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} 
                    value={this.state.roomName}
                    placeholder="New Room" type="text" name="roomName" required>
                    </input>
                    <button type="submit" id="createRoomButton">+</button>
                </form>

            </div>
        )
    }

}

export default NewRoom