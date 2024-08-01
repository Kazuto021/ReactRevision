import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Login from '../Views/Screens/Login'
import SignupScreen from '../Views/Screens/SignupScreen'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignupScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes