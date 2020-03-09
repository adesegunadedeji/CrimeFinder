import React from 'react'
import NavbarComp from '../Home/NavbarComp'

function chatBox() {
    return(
        <div>
            <NavbarComp/>
        <WelcomeMessage/>
        </div>
            )}


            const WelcomeMessage = props => {
                return <div>Hello Chatkit!</div>
              }
               
export default chatBox