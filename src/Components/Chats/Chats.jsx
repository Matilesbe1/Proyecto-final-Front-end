import React, {useState}from 'react'
import ChatItem from './ChatItem'
import "./Chats.css"
import ChatList from './ChatList'

const Chats = ({name, messages, img, id}) => {
    return (
        <div>
            <div className="header">
                <div className='header-left'>
                    <img src={img} alt={name} />
                    <h2>{name}</h2>
                </div>
                <div className='header-right'>
                    <button><i className="header-right-symbol bi bi-camera-video"></i></button>
                    <button><i className="header-right-symbol bi bi-search"></i></button>
                    <button><i className="header-right-symbol bi bi-three-dots-vertical"></i></button>
                </div>
            </div>
            <div className="main">
                <ChatList messages={messages} id={id} />
            </div>
        </div>
    )
}

export default Chats
