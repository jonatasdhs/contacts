import {createContext, useState, useEffect, Dispatch, SetStateAction} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginData } from '../pages/Login/validate';
import { api } from '../services/api';
import { RegisterData } from '../pages/Register/validate';
import {AxiosError} from 'axios'

interface iProviderProps {
    children: React.ReactNode;
}

interface iContextProps {
    loginUser: (data: LoginData) => void;
    registerUser: (data: RegisterData) => void;
    logoutUser: () => void
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext({} as iContextProps)

export const AuthProvider = ({children}: iProviderProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN')

        if(!token) {
            setLoading(false)
            navigate('/')
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [loading])

    const loginUser = async (data: LoginData) => {
        try {
            setLoading(true)
            const response = await api.post("/login", data)

            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@TOKEN", token)
            setTimeout(() => {
                navigate('dashboard')
            }, 1000);
        } catch (error) {
            console.log(error);
            
        } finally {
            setLoading(false)
        }
    }

    const registerUser = async (data: RegisterData) => {
        const newData = {...data, phone: parseInt(data.phone)}
        try {
            setLoading(true)
            await api.post("/users", newData)
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch(error) {
            const currentError = error as AxiosError<string>
            console.log(currentError);
        } finally {
            setLoading(false)
        }
    } 

    const logoutUser = () => {
        localStorage.removeItem("@TOKEN")
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{setLoading, loginUser, registerUser, loading, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}