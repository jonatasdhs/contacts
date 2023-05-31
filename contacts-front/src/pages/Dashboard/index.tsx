import { ContactsList } from "../../components/ContactsList"
import { Modal } from "../../components/Modal"
import { UserInfo } from "../../components/UserInfo"
import { useContacts } from "../../hooks/useContacts"
import { Container } from "../../styles/GlobalStyles"
import { StDiv } from "./style"
import { GrAdd } from 'react-icons/gr'

export const Dashboard = () => { 
    const {modal, setModal} = useContacts()
    return (
        <>
            <Container>
                <StDiv>
                    <div>
                        <h2>Suas Informações</h2>
                        <button onClick={(() => setModal(true))}><GrAdd/></button>
                    </div>
                    <UserInfo/>
                    <h2>Seus Contatos</h2>
                    <ContactsList/>
                </StDiv>
            </Container>
            {modal && <Modal/>}
        </>
    )
}