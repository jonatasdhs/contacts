import { useForm } from "react-hook-form"
import { StButton } from "../../styles/buttons"
import { StInput } from "../../styles/inputs"
import { ModalContainer } from "./style"
import { GrClose } from "react-icons/gr"
import { useContacts } from "../../hooks/useContacts"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactData, schema } from "../../pages/Dashboard/validate"

export const Modal = () => {
    const {register, handleSubmit} = useForm<contactData>({
        resolver: zodResolver(schema)
    })
    const {setModal, addContact} = useContacts()
    return (
        <ModalContainer>
            <div>
                <div>
                    <h2>Adicionar novo contato</h2>
                    <button onClick={(() => setModal(false))}><GrClose className="react_icons"/></button>
                </div>
                <form onSubmit={handleSubmit(addContact)}>
                    <label htmlFor="">Nome</label>
                    <StInput type="text" {...register("name")} />

                    <label htmlFor="">Email</label>
                    <StInput type="text" {...register("email")} />

                    <label htmlFor="">Telefone</label>
                    <StInput type="text" {...register("phone")}/>

                    <StButton buttonSize="default" buttonColor="success">Adicionar</StButton>
                </form>
            </div>
        </ModalContainer>
    )
}