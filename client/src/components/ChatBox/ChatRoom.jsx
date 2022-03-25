import React, { useRef, useState } from 'react';

import ChatMessage from './ChatMessage';

import './style.css';

function ChatRoom() {
    const dummy = useRef();

    const sendMessage = async e => {
        e.preventDefault();
        dummy.current.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <>
            <main>         
                <ChatMessage message='Hello guys!' />              
                <span ref={dummy}></span>         
            </main>
            <form onSubmit={sendMessage}>
                <input placeholder="Type something" />
                <button type="submit">Send</button>
            </form>
        </>
    );
}

export default ChatRoom;