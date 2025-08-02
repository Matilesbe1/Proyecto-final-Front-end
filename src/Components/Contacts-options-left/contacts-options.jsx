import React from 'react'
import "./contacts-options.css"

const ContactsLeftSide = () => {

    return (
        <div className='contacts-options'>
            <div className='contacts-options-top'>
                <button title='Chats'><i className="bi bi-chat-left-text-fill"></i></button>
                <button title='Estados'><i className="bi bi-disc"></i></button>
                <button title='Canales'><i className="bi bi-chat-text"></i></button>
                <button title='Comunidades'><i className="bi bi-people-fill"></i></button>
            </div>
            <div className='contacts-options-bottom'>
                <button title='Ajustes'><i className="bi bi-gear"></i></button>
                <button title='Perfil'><img src="https://i.pinimg.com/736x/11/92/be/1192bea88fdea125d41211de28d04f42.jpg" alt="Foto de Perfil" /></button>
            </div>
        </div>
    )
}

export default ContactsLeftSide
