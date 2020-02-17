import React from 'react'
import './Home.css'
import spaceNeedle from './spaceNeedle.jpg' 
import NavbarComp from './NavbarComp'
function Home () {
    return(
        <div>
            <NavbarComp/>
            <div>
            <img src={spaceNeedle} alt="Space Needle Seattle"></img>
            <h1 className="imageHeader">Are you a Seattle resident?</h1>
            <button>Learn More</button>
            </div>
           
        </div>
    )
}
export default  Home