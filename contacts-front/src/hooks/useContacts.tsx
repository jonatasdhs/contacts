import { useContext } from "react"
import { ContactsContext } from "../providers/ContactsProvider"

export const useContacts = () => {
    const contactsContext = useContext(ContactsContext)

    return contactsContext
}
