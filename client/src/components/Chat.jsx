import React from 'react'
import { useEffect, useState } from 'react';
import io from "socket.io-client"

const Chat = () => {

    const [socket] = useState(io(":8000"));
    const [message, setMessage] = useState();

    useEffect(() => {
        socket.on("welcome_message", data => { 
            setMessage(data) 
        });
    }, [])

    return (
        <div>{message && <p>{message}</p>}</div>
    )
}

export default Chat