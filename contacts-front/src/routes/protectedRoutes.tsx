import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { SetStateAction, useEffect, useState } from "react"

export const ProtectedRoutes = () => {
    const {loading} = useAuth()
    const [token, setToken] = useState<string | null>()

    useEffect(() => {
        setToken(localStorage.getItem('@TOKEN'))
    }, [])

    if(loading) {
        return <div>Carregando...</div>
    }

    return token ? <Outlet/> : <Navigate to="/"/>
}