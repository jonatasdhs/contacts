import { useContacts } from "../../hooks/useContacts"
import { StList } from "../../pages/Dashboard/style"
import { iContacts } from "../../providers/ContactsProvider"

export const ContactsList = () => {
    const {contacts} = useContacts()
    return (
        <StList>
            {contacts.map((contact: iContacts) => {
                return ( 
                    <li key={contact.id}>
                        <h3>Nome: {contact.name}</h3>
                        <div>
                            <p>Email: {contact.email}</p>
                            <p>Telefone: {contact.phone}</p>
                        </div>
                    </li>
                )
            })}
        </StList>
    )
}