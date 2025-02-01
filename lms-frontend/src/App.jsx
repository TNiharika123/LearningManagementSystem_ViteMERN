// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/auth' element={<AuthPage/>} />
    </Routes>
  )
}

export default App
