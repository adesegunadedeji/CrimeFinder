import React from 'react'
import './Home.css'
import spaceNeedle from './spaceNeedle.jpg' 
import NavbarComp from './NavbarComp'
import {Button} from 'reactstrap'
function Home () {
    return(
        <div>
            <NavbarComp/>
            <div>
            <img src={spaceNeedle} alt="Space Needle Seattle"></img>
            <h1 className="imageHeader">Are you a Seattle resident?</h1>
            <Button className="homeButton" href="/crimes" >Learn More</Button>
            </div>
            <div className="space"></div>
        </div>
    )
}
export default  Home