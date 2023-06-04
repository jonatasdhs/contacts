import { AuthProvider } from "./providers/AuthProvider";
import { ContactsProvider } from "./providers/ContactsProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export function App() {

  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <ContactsProvider>
          <RoutesMain/>
        </ContactsProvider>
      </AuthProvider>
    </>
  )
}