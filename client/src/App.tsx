// import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>      {/*LAYOUT*/}
          <Route index element={<Home />} />  {/* Default route for Layout */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
