//rfce emmet
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { IconButton, Avatar } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat.js';
import db from './firebase';
import { collection, getDocs} from "firebase/firestore";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const ChatRooms = []
    useEffect(() => {
        
        const unsubscribe = async () => {
            const querySnapshot  = await getDocs(collection(db, "rooms"))
            querySnapshot.forEach((doc) => {
                const room = doc.data()
                ChatRooms.push({id:  doc.id, name: room.name})
            })
            setRooms(ChatRooms)

        }
        unsubscribe()
    })
    return (
        <div className='sidebar'>
           <div className='sidebar_header'>
                <Avatar />
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlinedIcon />
                    <input placeholder='Search or start a new chat' type='text' />
                </div>
            </div>
            <div className='sidebar_chats'>
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} name={room.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar