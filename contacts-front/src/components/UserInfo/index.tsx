import { useContacts } from "../../hooks/useContacts"
import { StUser } from "../../pages/Dashboard/style"

export const UserInfo = () => {
    const {user} = useContacts()
    return(
        <StUser>
            <h3>Nome: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>
        </StUser>
    )
}