import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useEffect, useState } from "react"

export const ProtectedRoutes = () => {
    const {loading, user} = useAuth()


    if(loading) {
        return <div>Carregando...</div>
    }

    return user ? <Outlet/> : <Navigate to="/"/>
}