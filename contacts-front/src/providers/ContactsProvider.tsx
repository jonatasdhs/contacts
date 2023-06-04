import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
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
    deleteContact: (contactId: number) => void
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
    const {loading, setLoading} = useAuth()
    const [modal, setModal] = useState(false)
    const [contacts, setContacts] = useState<iContacts[]>([])

    
    
    const addContact = async (data: ContactRequest) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
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

    const deleteContact = async (contactId: number) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
            await api.delete(`/contacts/${contactId}`), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ContactsContext.Provider value={{contacts, modal, setModal, addContact, deleteContact}}>
            {children}
        </ContactsContext.Provider>
    )
}