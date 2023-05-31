import { useContacts } from "../../hooks/useContacts"
import { StDiv, StUser } from "../../pages/Dashboard/style"

export const UserInfo = () => {
    const {contacts} = useContacts()
    return(
        <StUser>
            <h3>Nome: {contacts.name}</h3>
            <p>Email: {contacts.email}</p>
            <p>Telefone: {contacts.phone}</p>
        </StUser>
    )
}