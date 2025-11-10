import React from 'react'
import Link1 from '../Components/Link1'
import { Route, Routes } from 'react-router-dom'
import{Routes,Route,Link} from 'react-router-dom'

function Home() {
  return <h1>Welcome to the Home Page</h1>
}

function About() {
  return <h1>About Us Page</h1>
}
function Link1() {
  return (
    <a href={to} style={{ margin: '0 10px' }}>
      {children}
    </a>
  )
}

function App() {
  return (
    <div>
      <nav>
        <Link1 to="/">Home</Link1>
        <Link1 to="/about">About us</Link1>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About us />} />
      </Routes>
    </div>
  )
}

export default App
