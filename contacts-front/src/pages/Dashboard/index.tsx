import { ContactsList } from "../../components/ContactsList"
import { Modal } from "../../components/Modal"
import { UserInfo } from "../../components/UserInfo"
import { Container } from "../../styles/GlobalStyles"
import { StDiv } from "./style"

export const Dashboard = () => { 
    return (
        <>
            <Container>
                <StDiv>
                    <h2>Suas Informações</h2>
                    <button>Adicionar Contato</button>
                    <UserInfo/>
                    <h2>Seus Contatos</h2>
                    <ContactsList/>
                </StDiv>
            </Container>
            <Modal/>
        </>
    )
}