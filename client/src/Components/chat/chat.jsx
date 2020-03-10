import React from 'react'
import NavbarComp from '../Home/NavbarComp'
import {
    ChatkitProvider,
    TokenProvider,
    withChatkit,
  } from "@pusher/chatkit-client-react"

    const tokenProvider = new TokenProvider({
                url: `${process.env.REACT_APP_CHATKIT_token}`,
    });
    const instanceLocator = `${process.env.REACT_APP_CHATKIT_instance}`
    const userId = "Adedeji"

    function chatBox() {
                return(
                    <div>
                        <NavbarComp/>
                        <ChatkitProvider
        instanceLocator={instanceLocator}
        tokenProvider={tokenProvider}
        userId={userId}
      >
                    <WelcomeMessage/>
                    </ChatkitProvider>
                    </div>
    )}

    const WelcomeMessage = withChatkit(props => {
        return (
          <div>
            {props.chatkit.isLoading
              ? 'Connecting to Chatkit...'
              : `Hello ${props.chatkit.currentUser.name}!`}
          </div>
        );
      });
export default chatBox