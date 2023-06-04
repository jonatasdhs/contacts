import {createContext, useState, Dispatch, SetStateAction, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginData } from '../pages/Login/validate';
import { api } from '../services/api';
import { RegisterData } from '../pages/Register/validate';
import {AxiosError} from 'axios'
import { toast } from 'react-toastify';
import { set } from 'zod';
import { decodeToken } from 'react-jwt';

interface iProviderProps {
    children: React.ReactNode;
}

interface iContextProps {
    loginUser: (data: LoginData) => void;
    registerUser: (data: RegisterData) => void;
    logoutUser: () => void
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    user: number | undefined

}

export const AuthContext = createContext({} as iContextProps)

export const AuthProvider = ({children}: iProviderProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<number>()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(!token) {
            setLoading(false) 
            return
        }
        const decodedToken: any = decodeToken(token)
        setUser(decodedToken.sub)

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [])


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
            const currentError = error as AxiosError<string | any>
            toast.error(currentError.response?.data.message)
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
                navigate("/")
            }, 2000)
        } catch(error) {
            const currentError = error as AxiosError<string | any>
            toast.error(currentError.response?.data.message)
        } finally {
            setLoading(false)
        }
    } 

    const logoutUser = () => {
        localStorage.removeItem("@TOKEN")
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{setLoading, loginUser, registerUser, loading, logoutUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}