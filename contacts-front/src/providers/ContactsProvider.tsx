import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { decodeToken } from "react-jwt";
import { contactData } from "../pages/Dashboard/validate";

interface iProviderProps {
    children: ReactNode
}

interface iContextProps {
    contacts: iContacts[]
    modal: boolean
    setModal: Dispatch<SetStateAction<boolean>>
    addContact: (data: contactData) => void
    user: iUser
}

export interface iContacts {
    id: number
    name: string,
    phone: number,
    email: string
}

export interface iUser {
    name: string
    phone: number
    email: string
}

export const ContactsContext = createContext({} as iContextProps)

export const ContactsProvider = ({children}: iProviderProps) => {
    const [userId, setUserId] = useState(1)
    const {loading} = useAuth()
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState({
        name: "asd",
        email: "mail@mail.com",
        phone: 78984654
    })
    const [contacts, setContacts] = useState([{
        id: 1123,
        name: "jose",
        phone: 879456421,
        email: "jose@mail.com"
    }])

    useEffect(() => {
        if(loading) return
        const token = localStorage.getItem("@TOKEN")
        if(!token) return
        const decodedToken: any = decodeToken(token)
        setUserId(decodedToken.sub)

        const loadUser = async () => {
            try {
                const token = localStorage.getItem("@TOKEN")
                const {data} = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            } catch(error) {
                console.log(error)
            }
        }
        
        
        const loadContacts = async () => {
            try {
                const token = localStorage.getItem("@TOKEN")
                const {data} = await api.get(`/contacts/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const { contacts } = data
                setContacts(contacts)
                setUser(contacts)
            } catch(error) {
                console.log(error)
            }
        }
        loadContacts()
        loadUser()
    }, [loading])

    const addContact = async (data: contactData) => {
        const newData = {...data, phone: parseInt(data.phone)}
        try {
            const token = localStorage.getItem("@TOKEN")
            await api.post(`/contacts/${userId}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let getContacts = contacts
            getContacts = [...contacts, newData]
            setContacts(getContacts)
        } catch(err) {
            console.log(err)
        } finally {
            setModal(false)
        }
    }

    return (
        <ContactsContext.Provider value={{user, contacts, modal, setModal, addContact}}>
            {children}
        </ContactsContext.Provider>
    )
}