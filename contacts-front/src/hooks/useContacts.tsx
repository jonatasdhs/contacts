import { useContext } from "react"
import { ContactsContext } from "../providers/ContactsProvider"

export const useContacts = () => {
    const authContext = useContext(ContactsContext)

    return authContext
}
