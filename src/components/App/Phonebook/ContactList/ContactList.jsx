import PropTypes from 'prop-types'
import { Button } from 'components/App/App.styled'

export const ContactList = ({contacts, deleteContact}) => {
    
    const markup = contacts.map(({id, name, number}) => (
        <li key={id}>
            {name}: {number}
            <Button onClick={() => deleteContact(id)}>Delete</Button>
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