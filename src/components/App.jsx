import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import { nanoid } from 'nanoid'

import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  hendlerFormData = data => {
    const sameContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (sameContacts)
      return alert(`${sameContacts.name} is already in contact`);

    const contact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  changeFilter = ({ currentTarget: { value } }) => {
    this.setState({
      filter: value,
    });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalaiz = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaiz)
    );
  };
  handleDeleteButton = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmitForm={this.hendlerFormData} />
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.changeFilter} />
        <ContactList
          handleDeleteButton={this.handleDeleteButton}
          contacts={visibleContacts}
        />
      </>
    );
  }
}

export default App
