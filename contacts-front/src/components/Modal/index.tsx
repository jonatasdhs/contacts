import { useForm } from "react-hook-form"
import { StButton } from "../../styles/buttons"
import { StInput } from "../../styles/inputs"
import { ModalContainer } from "./style"
import { GrClose } from "react-icons/gr"
import { useContacts } from "../../hooks/useContacts"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactRequest, contactData, contactRequest, schema } from "../../pages/Dashboard/validate"

export const Modal = () => {
    const {register, handleSubmit, formState: {
        errors
    }} = useForm<ContactRequest>({
        resolver: zodResolver(contactRequest)
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
                    <span>{errors.name?.message}</span>

                    <label htmlFor="">Email</label>
                    <StInput type="text" {...register("email")} />
                    <span>{errors.email?.message}</span>

                    <label htmlFor="">Telefone</label>
                    <StInput type="text" {...register("phone")}/>
                    <span>{errors.phone?.message}</span>

                    <StButton buttonSize="default" buttonColor="success" type="submit">Adicionar</StButton>
                </form>
            </div>
        </ModalContainer>
    )
}