import React, {useState, useContext} from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactItem = ({contact}) => {
    const contContext = useContext(contactContext);
    const {deleteContact, setCurrent, clearCurrent} = contContext;
    const {id, name, email, phone, type} = contact;

    const onDelete = () =>{
        deleteContact(id);
        clearCurrent();
    }
    return (
        <div className='card bg-light'>
            <h3 className="text primary text-left">
                {name}{' '}<span style={{float:'right'}} className={'badge '+(type === 'proffesional' ?'badge-success':'badge-primary')}>{type}</span>
            </h3>
            <ul className='list'>
                {email && (<li><i className='fas fa-envelope-open'></i> {email}</li>)}
                {phone && (<li><i className='fas fa-phone'></i> {phone}</li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={()=> setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}
export default ContactItem