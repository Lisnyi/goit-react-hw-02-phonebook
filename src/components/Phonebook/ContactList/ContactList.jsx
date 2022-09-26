import PropTypes from 'prop-types'

export const ContactList = ({contacts, deleteContact}) => {
    
    const markup = contacts.map(({id, name, number}) => (
        <li key={id}>
            {name}: {number}
            <button onClick={() => deleteContact(id)}>delete</button>
        </li>
    ))

    return  <ul>
                {markup}
            </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}