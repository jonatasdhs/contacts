import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterData, schema } from './validate'
import { useAuth } from '../../hooks/useAuth'
import { Container } from '../../styles/GlobalStyles'
import { StForm } from './style'
import { StInput } from '../../styles/inputs'
import { StButton } from '../../styles/buttons'
export const Register = () => {
    const { registerUser } = useAuth()
    const { register, handleSubmit, formState: {
        errors
    } } = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })
    return (
        <Container>
            <StForm>
                <h2>Register</h2>
                <form onSubmit={handleSubmit(registerUser)}>
                    <label htmlFor="">Name</label>
                    <StInput type="text" {...register('name')} />

                    <label htmlFor="">Phone</label>
                    <StInput type="text" {...register('phone')} />
                    <span>{errors.phone?.message}</span>

                    <label htmlFor="">Email</label>
                    <StInput type="email" {...register('email')} />

                    <label htmlFor="">Password</label>
                    <StInput type="password" {...register('password')} />

                    <StButton buttonSize="default" buttonColor="success" type="submit">Register</StButton>
                </form>
            </StForm>
        </Container>
    )
}