// import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
function App() {

  return (
    <BrowserRouter>

      <Link to="/contact">Contact us</Link>|
      <Link to="/admin">Login</Link>|

      <Routes>
        <Route path="/" element={<Layout />}>      {/*LAYOUT*/}
          <Route index element={<Home />} />  {/* Default route for Layout */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
