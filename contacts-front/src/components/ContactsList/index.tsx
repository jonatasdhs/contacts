import { useEffect, useState } from "react"
import { StList } from "../../pages/Dashboard/style"
import { iContacts } from "../../providers/ContactsProvider"
import { api } from "../../services/api"
import { decodeToken } from "react-jwt"
import { useContacts } from "../../hooks/useContacts"
import { MdDeleteOutline } from 'react-icons/md'

export const ContactsList = () => {
    const [contacts, setContact] = useState<iContacts[]>([])
    const {deleteContact} = useContacts()

    const style = {
        fontSize: "2em"
    }

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
                    <li id={String(contact.id)} key={contact.id}>
                        <h3>{contact.name}</h3>
                        <div>
                            <p>Email: {contact.email}</p>
                            <p>Telefone: {contact.phone}</p>
                        </div>
                        <div>
                            <button onClick={(() => deleteContact(contact.id))}><MdDeleteOutline style={style}/></button>
                        </div>
                    </li>
                )
            })}
        </StList>
    )
}