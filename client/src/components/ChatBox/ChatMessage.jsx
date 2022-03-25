import React from 'react';


import './style.css';

function ChatMessage( { message } ) {

    return (
        <>
            <div className="message">
                <img src='https://allimages.sgp1.digitaloceanspaces.com/anhdep247net/2022/02/1645856232_782_Avatar-Cute-Dang-Yeu-2022-%E2%80%93-Anh-Dai-Dien-De.jpg' />
                <div id="message_content" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                    <p id="message_content_item" style={{margin: 'auto 0', padding: '1px'}}>{message}</p>
                </div>
                <span id="message_status">Message received</span>
            </div>
        </>
    );
}

export default ChatMessage;