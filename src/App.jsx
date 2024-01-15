import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Bet from './pages/Bet'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bet' element={<Bet />} />
      </Routes>
    </div>
  )
}

export default App
