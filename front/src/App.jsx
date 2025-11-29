import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom"
import HeroPage from './Components/heroPage'
import Products from "./Components/Products"
import Retails from './Components/Retails'
import Histoire from "./Components/Histoire"
import NavBar from "./Components/NavBar"
export default function App() {
  return (
    <>
      <NavBar />
      {/* <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<><HeroPage /> <Products/> <Retails/></>} />
        <Route path='/notre_histoire' element={<Histoire/>}></Route>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}