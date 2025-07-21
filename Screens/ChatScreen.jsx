import React, { useState } from 'react'
import ContactsLeftSide from "../Components/Contacts-options-left/contacts-options"
import ContactsMain from "../Components/contacts-main/contacts-main"
import { useParams } from 'react-router'
import { getContactById } from '../services/getContactServices'


const ChatScreen = () => {

    //CONSEGUIR EL ID DEL CONTACTO
    const { contact_id } = useParams();
    const contact_selected  = getContactById(contact_id);
    const [messages, setMessages] = useState(contact_selected.messages)

    //AGREGAR UN NUEVO MENSAJE
    
    

    return (
        <div>
            <div className="left">
                <ContactsLeftSide />
                <ContactsMain />
            </div>
        </div>
    )
}

export default ChatScreen
