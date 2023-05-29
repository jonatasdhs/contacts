import { ReactNode, createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { decodeToken } from "react-jwt";

interface iProviderProps {
    children: ReactNode
}

interface iContextProps {
    contacts: iUser
}

export interface iContacts {
    name: string,
    phone: number,
    email: string
}

export interface iUser {
    name: string
    phone: number
    email: string
    contacts: iContacts[]
}

export const ContactsContext = createContext({} as iContextProps)

export const ContactsProvider = ({children}: iProviderProps) => {
    const [user, setUser] = useState(1)
    const {loading} = useAuth()
    const [contacts, setContacts] = useState({
        name: "jon",
        email: "jon@mail.com",
        phone: 77894654,
        contacts: [
            {
                name: "jose",
                phone: 879456421,
                email: "jose@mail.com"
            }
        ]
    })

    useEffect(() => {
        if(loading) return
        const token = localStorage.getItem("@TOKEN")
        if(!token) return
        const decodedToken: any = decodeToken(token)
        setUser(decodedToken.sub)
        
        
        const loadContacts = async () => {
            try {
                const token = localStorage.getItem("@TOKEN")
                const {data} = await api.get(`/contacts/${user}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { contacts } = data
                setContacts(contacts)
            } catch(error) {
                console.log(error)
            }
        }
        loadContacts()
    }, [loading])

    

    return (
        <ContactsContext.Provider value={{contacts}}>
            {children}
        </ContactsContext.Provider>
    )
}