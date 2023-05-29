/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AddContact = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
        console.log()
    };

    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={onSubmit}>
                <div className='field'>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Gen</label>
                    <input
                        type='text'
                        name='phone'
                        placeholder='Gen'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button className='ui button blue'> Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;




