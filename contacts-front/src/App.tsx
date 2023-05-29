import { AuthProvider } from "./providers/AuthProvider";
import { ContactsProvider } from "./providers/ContactsProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";


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