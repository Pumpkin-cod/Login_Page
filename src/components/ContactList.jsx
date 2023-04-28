/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ContactCard from './ContactCard'
import { Grid } from 'semantic-ui-react'

const ContactList = ({ list }) => {
    return (
        <div className='ui celled list flex'>
            {list.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default ContactList
