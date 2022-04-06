import { Avatar, IconButton } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import React, { useState, useEffect } from 'react'
import './Chat.css'
function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>", input)

        setInput("");
    };
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar src = 'https://avatars.dicebear.com/api/micah/1.svg'/>
            <div className='chat_headerInfo'>
                <h3>Room Name</h3>
                <p>Last seen at</p>
            </div>
            <div className='chat_headerRight'>
            <div className='chat_headerRighta'>
                <IconButton>
                   <VideocamIcon />
                </IconButton>
                <IconButton>
                   <CallIcon />
                </IconButton>
            </div>
            <div className='chat_headerRightb'>
                <IconButton>
                   <SearchIcon />
                </IconButton>
                <IconButton>
                   <MoreHorizIcon />
                </IconButton>
            </div>
            </div>
        </div>
        <div className='chat_body'>
            <p className={`chat_message ${true && "chat_receiver"}`}>hey there
            <span className='chat_timestamp'>4:38pm</span>
            </p>
        </div>
        <div className='chat_footer'>
            <MoodIcon />
            <AttachFileIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type = "text" placeholder='Type a message'/>
                <button onClick={sendMessage}>Type a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat