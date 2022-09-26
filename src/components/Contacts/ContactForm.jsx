import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { Formik, Form, Field } from 'formik';

export default class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }

    nameId = nanoid()
    numberId = nanoid()

    handleChange = ({currentTarget}) => {
        this.setState({
          [currentTarget.name]:currentTarget.value
        })
      }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { name, number } = this.state
    //     this.props.addContact(name, number)
    //     this.setState({
    //         name: '',
    //         number: ''
    //     })
    // }
    initialValues = {
        name: '',
        number: ''
    }

    handleSubmit = () => {
        const { name, number } = this.state
        this.props.addContact(name, number)
        this.setState({
                    name: '',
                    number: ''
                })
    }

    render() {
        const { handleChange, handleSubmit, nameId, numberId, initialValues } = this
        const { name, number } = this.state
        return  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form autoComplete='on'>
                        <label htmlFor={nameId}>Name</label>
                        <Field
                            type="text"
                            name="name"
                            value={name}
                            id={nameId}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor={numberId}>Number</label>
                        <Field
                            type="tel"
                            name="number"
                            value={number}
                            id={numberId}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={handleChange}
                        />
                        <button type='submit'>Add contact</button>
                    </Form>
                </Formik>
    }
}