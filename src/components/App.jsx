import React, { Component } from 'react'
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
  
  onHandleChange = ({currentTarget}) => {
    this.setState({
      [currentTarget.name]:currentTarget.value
    })
  }

  addContact = (name, number) => {
      console.log(name, number)
  }

  render() {
    const { onHandleChange, addContact } = this
    const { contacts } = this.state

    return (
      <form>
        <section>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact}/>
        </section>
    
        <section>
          <h2>Contacts</h2>
          <Filter onHandleChange={onHandleChange}/>
          <ContactList contacts={contacts}/>
        </section>
      </form>
    );
  }
}

