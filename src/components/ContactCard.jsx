/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import user from '../assets/user.png';

const ContactCard = ({ contact, onDelete, onEdit }) => {
    const { id, name, email, phone } = contact;

    const handleDelete = () => {
        onDelete(id);
    };

    const handleEdit = () => {
        onEdit(id);
    };

    return (
        <Grid stackable columns={3}>
            <Grid.Row>   
                <Grid.Column width={13}>
                    <div className="ui card cards">
                        <div className="content">
                            <Grid.Column width={3}>
                                <Image src={user} size="tiny" circular />
                            </Grid.Column>
                            <div className='data'>
                            <div className="header">{name}</div>
                            <div className="meta">{email}</div>
                            <div className="description">{phone}</div>
                            </div>
                        </div>
                        <div className="extra content">
                            <span className="right floated edit icon" onClick={handleEdit}>
                                <i className="edit icon"></i>
                            </span>
                            <span className="right floated trash icon" onClick={handleDelete}>
                                <i className="trash icon"></i>
                            </span>
                        </div>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default ContactCard;




