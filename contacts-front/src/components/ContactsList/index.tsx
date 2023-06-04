import { useEffect, useState } from "react"
import { StList } from "../../pages/Dashboard/style"
import { iContacts } from "../../providers/ContactsProvider"
import { api } from "../../services/api"
import { decodeToken } from "react-jwt"

export const ContactsList = () => {
    const [contacts, setContact] = useState<iContacts[]>([])

    useEffect(() => {
        const loadContacts = async () => {
            const token = localStorage.getItem("@TOKEN")
            const decodedToken: any = decodeToken(token!)
            const {data} = await api.get(`/contacts/${decodedToken.sub}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContact(data.contacts)
        }
        loadContacts()
    }, [])

    return (
        <StList>
            {contacts.map((contact: iContacts) => {
                return ( 
                    <li key={contact.id}>
                        <h3>{contact.name}</h3>
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