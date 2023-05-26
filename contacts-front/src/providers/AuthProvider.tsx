import {createContext, useState, useEffect} from 'react'
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
    loading: boolean
}



export const AuthContext = createContext({} as iContextProps)

export const AuthProvider = ({children}: iProviderProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN')

        if(!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

    const loginUser = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data)

            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@TOKEN", token)
            setTimeout(() => {
                navigate('dashboard')
            }, 1000);
        } catch (error) {
            console.log(error);
            
        }
    }

    const registerUser = async (data: RegisterData) => {
        try {
            await api.post("/users", data)
            setTimeout(() => {
                navigate('/login')
            }, 1000)
        } catch(error) {
            const currentError = error as AxiosError<string>
            console.log(currentError);
        }
    } 

    return(
        <AuthContext.Provider value={{loginUser, registerUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}