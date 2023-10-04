import React from 'react'
import css from './ContactList.module.css'
const ContactList = ({ contacts, handleDeleteButton }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={css.button}
              onClick={() => handleDeleteButton(contact.id)}
              type="click"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList
