import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { decodeToken } from "react-jwt";
import { contactData } from "../pages/Dashboard/validate";

interface iProviderProps {
    children: ReactNode
}

interface iContextProps {
    contacts: iUser
    modal: boolean
    setModal: Dispatch<SetStateAction<boolean>>
    addContact: (data: contactData) => void
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
    const [userId, setUserId] = useState(1)
    const {loading} = useAuth()
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState()
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
        setUserId(decodedToken.sub)
        
        
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
            const getContacts = contacts
            getContacts.contacts = [...contacts.contacts, newData]
            setContacts(getContacts)
        } catch(err) {
            console.log(err)
        } finally {
            setModal(false)
        }
    }

    return (
        <ContactsContext.Provider value={{contacts, modal, setModal, addContact}}>
            {children}
        </ContactsContext.Provider>
    )
}