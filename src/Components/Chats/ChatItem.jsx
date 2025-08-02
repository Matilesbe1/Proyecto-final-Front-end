import React from 'react'

const ChatItem = ({emisor, hora, texto, status, id}) => {
    return (
        <div>
            <div className='chat-messages'>
                <h4>{emisor}</h4>
                <p>{texto}</p>
                <span>{hora}</span>
                <span>{status}</span>
            </div>
        </div>
    )
}

export default ChatItem
