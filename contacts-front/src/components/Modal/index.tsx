import { useForm } from "react-hook-form"
import { StButton } from "../../styles/buttons"
import { StInput } from "../../styles/inputs"
import { ModalContainer } from "./style"
import { GrClose } from "react-icons/gr"

export const Modal = () => {
    const {register, handleSubmit} = useForm()
    return (
        <ModalContainer>
            <div>
                <div>
                    <h2>Adicionar novo contato</h2>
                    <button><GrClose classname="react_icons"/></button>
                </div>
                <form onSubmit={handleSubmit()}>
                    <label htmlFor="">Nome</label>
                    <StInput type="text" />

                    <label htmlFor="">Email</label>
                    <StInput type="text" />

                    <label htmlFor="">Telefone</label>
                    <StInput type="text" />

                    <StButton buttonSize="default" buttonColor="success">Adicionar</StButton>
                </form>
            </div>
        </ModalContainer>
    )
}