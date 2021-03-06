import React, {useState, useContext, useEffect} from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    
    const contContext = useContext(contactContext);
    const {addContact, updateContact, clearCurrent, current} = contContext;

    useEffect(()=>{
        if(current!=null){
            setContact(current);
        }else{
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            });
        }
    }, [contContext, current]);


    const [contact, setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    
    const {name,email,phone,type} = contact;
    const onChange = e => setContact({...contact, [e.target.name]:e.target.value});
    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
            addContact(contact);
        }else{
            updateContact(contact);
        }
        
        clearAll();
    }
    const clearAll = ()=> {
        clearCurrent();
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{(current == null ? 'Add Contact':'Edit Contact')}</h2>
            <input type="text" placeholder='Name' name='name' value={name} onChange={onChange}/>
            <input type="email" placeholder='Email' name='email' value={email} onChange={onChange}/>
            <input type="text" placeholder='Phone' name='phone' value={phone} onChange={onChange}/>
            
            <h5>Contact Type</h5>
            <input type="radio" name="type" value='personal' checked={type === 'personal'} onChange={onChange}/> Personal {' '}
            <input type="radio" name="type" value='proffesional' checked={type === 'proffesional'} onChange={onChange}/> proffesional {' '}
            <input type="submit" value={(current == null ? 'Add Contact':'Edit Contact')} className='btn btn-primary btn-block'/>
            {current && <div>
                <button className="btn btn-light btn-block" value="Clear" onClick={clearAll}>Clear</button>
                </div>}
        </form>
    )
}
export default ContactForm;