import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types'

export const ContactForm = ({addContact}) => {

    const initialValues = {
        name: '',
        number: ''
    }

    const schema = yup.object().shape({
        name: yup.string()
            .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
            .required(),
        number: yup.string()
            .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
            .required()
      });

    const nameId = nanoid()
    const numberId = nanoid()

    const handleSubmit = ({name, number}, {resetForm}) => {
        addContact(name, number)
        resetForm()
    }
        return  <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    <Form autoComplete='on'>
                        <label htmlFor={nameId}>Name</label>
                        <Field
                            type="text"
                            name="name"
                            id={nameId}
                        />
                        <ErrorMessage name="name"/>
                        <label htmlFor={numberId}>Number</label>
                        <Field
                            type="tel"
                            name="number"
                            id={numberId}  
                        />
                        <ErrorMessage name="number" />
                        <button type='submit'>Add contact</button>
                    </Form>
                </Formik>
    }

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}