import React from 'react'
import ContactsItem from './ContactsItem'

const ContactsList = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact) => (
                <ContactsItem key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default ContactsList


/* 
 {contacts.map((contact) => (
                <ContactsItem
                    key={contact.id}
                    name={contact.name}
                    img={contact.profileImg}
                    last_conection={contact.last_conection}
                    contact={contact}
                />
            ))}
*/