import React , {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
ADD_CONTACT,
DELETE_CONTACT,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_CONTACT,
FILTER_CONTACTS,
CLEAR_FILTER
}from '../types';

const ContactState = props =>{
    const initialState = {
        contacts:[
            {
                id:1,
                name:"Rajan_1",
                email:"rajan_1@gmail.com",
                phone:"123-2345-564",
                type: "personal"
            },
            {
                id:2,
                name:"Ranjit",
                email:"ranjit@gmail.com",
                phone:"223-2245-564",
                type: "proffesional"
            }
        ],
        current:null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add contact
    const addContact = contact =>{
        contact.id = uuid();
        dispatch({type:ADD_CONTACT, payload:contact});
    }

    //Delete contact
    const deleteContact = id =>{
       
        dispatch({type:DELETE_CONTACT, payload:id});
    }

    //set Currect contact
    const setCurrent = contact =>{
        
        dispatch({type:SET_CURRENT, payload:contact});
    }

    //clear current contact
    const clearCurrent = () =>{
        
        dispatch({type:CLEAR_CURRENT});
    }
    //update contact
    const updateContact = contact =>{
        dispatch({type:UPDATE_CONTACT, payload:contact});
    }
    //Filter contacts

    //clear filter

    return (
        <contactContext.Provider value={
            {
                contacts:state.contacts,
                current:state.current,
                addContact,
                updateContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }
        }>
            
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;