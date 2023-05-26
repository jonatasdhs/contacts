import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";


export function App() {

  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </>
  )
}