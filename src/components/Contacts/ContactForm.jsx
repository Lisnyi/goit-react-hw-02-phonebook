import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class ContactForm extends Component {

    state = {  
        name: '',
        number: ''
    }

    onHandleChange = ({currentTarget}) => {
        this.setState({
          [currentTarget.name]:currentTarget.value
        })
      }

    onHandleSubmit = (e, name, number) => {
        e.preventDefault()
        this.props.addContact(name, number)
    }

    nameId = nanoid()
    numberId = nanoid()

    render() {
        const { onHandleChange, onHandleSubmit, nameId, numberId } = this
        const { name, number } = this.state
        return  <>
                    <label htmlFor={nameId}>Name</label>
                    <input
                        type="text"
                        name="name"
                        id={nameId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={onHandleChange}
                    />
                    <label htmlFor={numberId}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        id={numberId}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={onHandleChange}
                    />
                    <button type='submit' onSubmit={()=>onHandleSubmit(name, number)}>Add contact</button>
                </>
    }
}