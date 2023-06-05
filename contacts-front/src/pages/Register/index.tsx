import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterData, schema } from './validate'
import { useAuth } from '../../hooks/useAuth'
import { Container } from '../../styles/GlobalStyles'
import { StForm } from './style'
import { StError, StInput } from '../../styles/inputs'
import { StButton } from '../../styles/buttons'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const { registerUser } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {
        errors
    } } = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })
    return (
        <Container>
            <StForm>
                <div>
                    <h2>Register</h2>
                    <StButton buttonColor='gray' buttonSize='medium' onClick={() => navigate("/")}>Login</StButton>
                </div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <label htmlFor="">Name</label>
                    <StInput type="text" {...register('name')} />
                    <StError>{errors.name?.message}</StError>

                    <label htmlFor="">Phone</label>
                    <StInput type="text" {...register('phone')} />
                    <StError>{errors.phone?.message}</StError>

                    <label htmlFor="">Email</label>
                    <StInput type="email" {...register('email')} />
                    <StError>{errors.email?.message}</StError>

                    <label htmlFor="">Password</label>
                    <StInput type="password" {...register('password')} />
                    <StError>{errors.password?.message}</StError>

                    <StButton buttonSize="default" buttonColor="success" type="submit">Register</StButton>
                </form>
            </StForm>
        </Container>
    )
}