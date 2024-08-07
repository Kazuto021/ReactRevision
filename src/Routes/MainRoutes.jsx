import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Login from '../Views/Screens/Login'
import SignupScreen from '../Views/Screens/SignupScreen'
import CardScreen from '../Views/Screens/CardScreen'
import WeatherCard from '../Views/Components/WeatherCard'
import CardDetail from '../Views/Screens/CardDetail'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignupScreen />} />
                <Route path='/products' element={<CardScreen />} />
                <Route path='/WeatherCard' element={<WeatherCard />} />
                <Route path='/details' element={<CardDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes