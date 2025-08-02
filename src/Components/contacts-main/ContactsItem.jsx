import React from 'react'
import { Link } from 'react-router'

const ContactsItem = ({contact}) => {

    return (
        <Link to={`/contact/${contact.id}/messages`}>
            <div className='contacts-item'>
                <img src={contact.profileImg} alt={contact.name} />
                <div>
                    <h2>{contact.name}</h2>
                    <p>{contact.last_conection}</p>
                </div>
            </div>
        </Link>
    );
};

export default ContactsItem
