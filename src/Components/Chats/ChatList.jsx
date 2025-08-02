import React from 'react'
import ChatItem from './ChatItem'

const ChatList = ({messages}) => {
    const lista_mensajes = messages.map(
        function (message) {
            return <ChatItem
                emisor={message.emisor}
                hora={message.hora}
                id={message.id}
                texto={message.texto}
                status={message.status}
                />
        }
    )
    return (
        <div>
            {lista_mensajes}
        </div>
    )
}

export default ChatList