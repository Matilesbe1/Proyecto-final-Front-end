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