import React from 'react'
import ChatItem from './ChatItem'

const ChatList = ({messages, deleteMessageById}) => {
    if(messages.length===0){
        return <span className='without-messages'>Aun no tienes mensajes</span>
    }
    const lista_mensajes = messages.map(message=>{ 
            return <ChatItem
                emisor={message.emisor}
                hora={message.hora}
                id={message.id}
                key={message.id}
                texto={message.texto}
                status={message.status}
                deleteMessageById={deleteMessageById}

                />
        })
    
    return (
        <div>
            {lista_mensajes}
            
        </div>
    )
}

export default ChatList