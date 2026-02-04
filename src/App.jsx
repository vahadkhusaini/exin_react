import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Transaction from './pages/transaction/Transaction'

function App() {
  return(
    <Router>
      <div className='pb-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  )
}

export default App
