import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from "@mui/material";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-human-sprites';

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName){

        }
    };
  return !addNewChat ? (
    <div className='sidebar_chat'>
        <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
        <div className='sidebarChat_info'>
            <h2>Profile Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  ):(
      <div onClick={ createChat }
      className='sidebar_chat'>
          <h2>Add new chat</h2>
      </div>
  )
}
export default SidebarChat