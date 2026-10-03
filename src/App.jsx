import React from 'react'
import Navbar from './Components/Navbar'
import { Home } from 'lucide-react'
import HomePage from './Components/Home'
import AppRoutes from './Routes/AppRoutes'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App
