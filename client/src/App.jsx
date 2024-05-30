import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Reg from './Pages/Reg/Reg'
import Auth from './Pages/Auth/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/reg' element={<Reg />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
