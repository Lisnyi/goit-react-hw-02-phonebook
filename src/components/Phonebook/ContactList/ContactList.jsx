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