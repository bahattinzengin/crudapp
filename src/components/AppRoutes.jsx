import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'

const AppRoutes  = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route  path="main" element={<MainPage/>}/>
    <Route  path="/" element={<LoginPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes 