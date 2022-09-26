import React, { Component } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import { ContactForm, ContactList, Filter } from '../components'

export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  
  handleChange = ({currentTarget}) => {
    this.setState({
      [currentTarget.name]:currentTarget.value
    })
  }

  isDuplicate(name) {
    const { contacts } = this.state
    const result = contacts.find((contact) => contact.name === name)
    return result
  }
  
  addContact = (name, number) => {
    if (this.isDuplicate(name)) {
      return Notify.warning(`${name} is already in contacts`)
    }
    const newContact = {
      id: nanoid(),
      name,
      number
    }
    this.setState((prev)=>{
        return {
          contacts: [...prev.contacts, newContact]
        }
      })
  }

  deleteContact = (id) => {
    this.setState((prev) => {
        const contactsList = prev.contacts.filter((contact) => contact.id !== id);

        return {
            contacts: contactsList
        }
    })
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state
    
    if (!filter) {
        return contacts
    }

    const normalizedFilter = filter.toLocaleLowerCase()
    const filteredContacts = contacts.filter(({name}) => {
        const normalizedName = name.toLocaleLowerCase()
        const result = normalizedName.includes(normalizedFilter)
        return result;
    })

    return filteredContacts;
  }

  render() {
    const { handleChange, addContact, getFilteredContacts, deleteContact } = this
    const { filter } = this.state
    const contacts = getFilteredContacts()

    return (
      <>
        <section>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact}/>
        </section>
    
        <section>
            <h2>Contacts</h2>
            <Filter filter={filter} handleChange={handleChange}/>
            {contacts.length
              ? <ContactList contacts={contacts} deleteContact={deleteContact}/>
              : null}
        </section>
      </>
    );
  }
}

