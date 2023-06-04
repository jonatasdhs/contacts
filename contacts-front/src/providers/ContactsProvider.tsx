import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { decodeToken } from "react-jwt";
import { ContactRequest } from "../pages/Dashboard/validate";

interface iProviderProps {
    children: ReactNode
}

interface iContextProps {
    contacts: iContacts[]
    modal: boolean
    setModal: Dispatch<SetStateAction<boolean>>
    addContact: (data: ContactRequest) => void
    user: iUser
}

export interface iContacts {
    id: number
    name: string,
    phone: number,
    email: string
}

export interface iUser {
    id: number
    name: string
    phone: number
    email: string
}

export const ContactsContext = createContext({} as iContextProps)

export const ContactsProvider = ({children}: iProviderProps) => {
    const [userId, setUserId] = useState()
    const {loading, setLoading} = useAuth()
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState<iUser>({
        id: 5,
        name: "asd",
        email: "mail@mail.com",
        phone: 78984654
    })
    const [contacts, setContacts] = useState<iContacts[]>([])

    const token = localStorage.getItem("@TOKEN")


    const addContact = async (data: ContactRequest) => {
        try {
            setLoading(true)
            const decodedToken: any = decodeToken(token!)
            const newData = {...data, phone: parseInt(data.phone)}
            const newContact: iContacts = await api.post(`/contacts/${decodedToken.sub}`, newData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let getContacts = contacts
            getContacts = [...contacts, newContact]
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