import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/Home.container'
import LoginPage from './pages/auth/login/Login.container'
import ProtectedRoutes from './components/protected-routes/ProtectedRoutes'
import AboutPage from './pages/about/About.container'

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route element={<ProtectedRoutes isAuthenticated={isAuth} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter