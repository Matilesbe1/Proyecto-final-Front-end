import React, { useState } from "react";
import ContactsList from "../Components/contacts-main/ContactsList";
import { getContactList } from "../services/getContactServices";
import ContactsLeftSide from "../Components/Contacts-options-left/contacts-options";
import ContactsMain from "../Components/contacts-main/contacts-main";

const ContactScreen = () => {
    const contacts=getContactList()
    const [contactsState, setContacts] = useState(contacts);

    return (
        <div>
            <div className="left">
                <ContactsLeftSide />
                <ContactsMain contacts={contactsState}/>
            </div>
        </div>
    );
};

export default ContactScreen;
