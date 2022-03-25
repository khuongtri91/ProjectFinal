import React from 'react';
import './style.css';

import ChatRoom from './ChatRoom';


function ChatBox() {

    return (
        <div className="App">
            <section>
                <header>
                    <h1 style={{color: 'white'}}>ChatBox HealthyCare</h1>
                </header>
                <ChatRoom />
            </section>
        </div>              
    );
}

export default ChatBox;