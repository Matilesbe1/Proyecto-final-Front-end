import React from 'react'


const ChatItem = ({ emisor, hora, texto, status, id, deleteMessageById, newMessages }) => {

    const Messages=(()=>{
        if (emisor === 'YO') {
        return (
            <div className='chat-content'>
                <div className='chat-item chat-item-messages-yo'>
                    <p>{texto || newMessages}</p>
                    <span>{hora}</span>
                    <span><i className="check-message-icon bi bi-check2-all"></i></span>
                    <button onClick={()=>{deleteMessageById(id)}}><i className="btn-eliminar bi bi-trash"></i></button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='chat-content'>
                <div className='chat-item chat-item-messages-otro'>
                    <p>{texto}</p>
                    <span>{hora}</span>
                    <button onClick={()=>{deleteMessageById(id)}}><i className="btn-eliminar bi bi-trash"></i></button>
                </div>
            </div>
        )
    }
    })
    return(
            <div className='chat-main-content'>
                <Messages />
            </div>
    )

}

export default ChatItem
