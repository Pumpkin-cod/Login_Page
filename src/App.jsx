/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
// import ContactCard from './components/ContactCard'
import 'semantic-ui-css/semantic.min.css'
import contactsData from './components/contacts.json'
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const handleDelete = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  const handleEdit = (id) => {
    
    // console.log(`Editing contact with id ${id}`);
  };


  return (
    <div className='App'>
      <Header />
      <AddContact onAdd={addContact} />
      <ContactList list={contacts} onDelete={handleDelete} onEdit= {handleEdit} />
    </div>
  )
}

export default App
