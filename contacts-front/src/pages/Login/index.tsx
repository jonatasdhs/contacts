import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validate"
import { useAuth } from "../../hooks/useAuth"
import { StForm } from "./style"
import { Container } from "../../styles/GlobalStyles"
import { StInput } from "../../styles/inputs"
import { StButton } from "../../styles/buttons"

export const Login = () => {
    const { loginUser } = useAuth()

    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    return (
        <Container>
            <div>

            </div>
            <StForm>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(loginUser)}>
                    <label htmlFor="">Email</label>
                    <StInput type="email" id="email" {...register('email')} />

                    <label htmlFor="">Password</label>
                    <StInput type="password" id="password" {...register('password')} />

                    <StButton buttonSize="default" buttonColor="success" type="submit">Login</StButton>
                </form>
            </StForm>
        </Container>
    )
}