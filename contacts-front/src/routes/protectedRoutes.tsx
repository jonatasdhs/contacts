import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const ProtectedRoutes = () => {
    const {loading, user} = useAuth()


    if(loading) {
        return <div>Carregando...</div>
    }

    return user ? <Outlet/> : <Navigate to="/"/>
}