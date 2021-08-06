import React from 'react'
import { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contContext = useContext(contactContext);

    const {contacts} = contContext;


    return (
        <Fragment>
            {contacts.map(contact =>(
                <ContactItem key={contact.id} contact={contact}/>
            ))}
        </Fragment>
    )
}
export default Contacts;