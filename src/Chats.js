import { Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Chats.css';

const Chats = () => {
  return (
    <div className='chats'>
        <div className="chats__header">
            <Avatar className='chats__avatar' />
            <div className="chats___search">
                <Search />
            </div>
        </div>
    </div>
  )
}

export default Chats