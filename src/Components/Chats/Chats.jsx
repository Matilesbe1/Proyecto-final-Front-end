import React, {useState}from 'react'
import ChatItem from './ChatItem'
import "./Chats.css"
import ChatList from './ChatList'

const Chats = ({messages, deleteMessageById, img, name}) => {
    return (
        <div className='chats-container'>
            <div className="header">
                <div className='header-left'>
                    <button onClick={()=>{(window.location.href = "/")}}><i className=" bi bi-arrow-left"></i></button>
                    <img src={img} alt={name} />
                    <h2>{name}</h2>
                </div>
                <div className='header-right'>
                    <button><i className="header-right-symbol bi bi-camera-video"></i></button>
                    <button><i className="header-right-symbol bi bi-search"></i></button>
                    <button><i className="header-right-symbol bi bi-three-dots-vertical"></i></button>
                </div>
            </div>
            <div className="main-chat">
                <ChatList messages={messages} deleteMessageById={deleteMessageById}/>
                
            </div>
        </div>
    )
}

export default Chats
