export const ContactList = ({contacts}) => {
    const markup = contacts.map(({id, name, number}) => (
        <li key={id}>
            {name}: {number}
            <button>delete</button>
        </li>
    ))

    return  <ul>
                {markup}
            </ul>
}