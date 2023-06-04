import { useEffect, useState } from "react"
import { StUser } from "../../pages/Dashboard/style"
import { iUser } from "../../providers/ContactsProvider"
import { decodeToken } from "react-jwt"
import { api } from "../../services/api"

export const UserInfo = () => {
    const [user, setUser] = useState<iUser>({
        id: 1,
        name: 'teste',
        phone: 12354,
        email: "mail@mail.com"
    })

    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem('@TOKEN')
                const decodedToken: any = decodeToken(token!)
                const {data} = await api.get<iUser>(`/users/${decodedToken.sub}`)
                setUser(data)
            } catch(err) {
                console.log(err)
            }
        }
        loadUser()
    }, [])

    return(
        <StUser>
            <h3>Nome: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>
        </StUser>
    )
}