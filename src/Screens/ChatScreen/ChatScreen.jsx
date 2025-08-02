import React, { useEffect, useState } from 'react'
import ContactsLeftSide from "../../Components/Contacts-options-left/contacts-options"
import ContactsMain from "../../Components/contacts-main/contacts-main"
import { useParams } from 'react-router'
import { getContactById } from '../../services/getContactServices'
import "./ChatScreen.css"
import Chats from '../../Components/Chats/Chats'


const ChatScreen = () => {

    const { contact_id } = useParams();
    const contact_selected = getContactById(contact_id);
    const [messages, setMessages] = useState(contact_selected.messages)
    const [newMessage, setNewMessage] = useState('');
    useEffect(() => {
        setMessages(contact_selected.messages || []);
    }, [contact_id, contact_selected]);



    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of messages) {
            if (message.id !== message_id) {
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault();
        const newDate = new Date();
            const newMsg = {
                emisor: 'YO',
                hora: newDate.getHours() + ':' + newDate.getMinutes(),
                id: messages.length +1,
                texto: newMessage,
                status: 'no-visto'
            };
            setMessages(prevMessages => [...prevMessages, newMsg]);
            setNewMessage('');
        }
    



    const addNewMessage = (messageText) => {
        const newMessageObject = {
            emisor: 'YO',
            hora: newDate.getHours() + ':' + newDate.getMinutes(),
            text: messageText,
            status: 'no-visto',
            id: messages.length +1,
        }
        setMessages(prevMessages => [...prevMessages, newMessageObject]);
        setNewMessage('');
    }


    return (
        <div>
            <div className="main-content">
                <ContactsLeftSide />
                <ContactsMain />
                
                <div className="chats-section">
                    <div className='chat'>
                        <Chats messages={messages} name={contact_selected.name} img={contact_selected.profileImg} deleteMessageById={deleteMessageById} />
                    </div>
                    <div className='footer-input'>
                        <form onSubmit={handleSubmitSendMessageForm}>
                            <div>
                                <label htmlFor="message">Escribe un Mensaje</label>
                                <input type="text" placeholder="Escribe un mensaje" name='message' id='message' required className='input-message' value={newMessage} onChange={(event) => setNewMessage(event.target.value)} />
                            </div>
                            <button type='submit' onClick={() => { addNewMessage }}><i className="bi bi-send-fill"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatScreen
