import React from "react"
import Home from "./pages/Landingpage"
import MobileMenu from "./MobileNav" 
import DesktopNavBar from "./DesktopNav"
import { Routes, Route } from "react-router-dom"
import SignUp from "./Main_components/Register"
import LogIn from "./Main_components/Login"



function App() {

  return (
    <>
    <div className="lg:p-5 bg-slate-950">
      <div className="fixed z-50 top-0 backdrop-blur-md lg:w-full w-full">
    <DesktopNavBar/>
      </div>
        <div>
          <MobileMenu/>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/Login" element={<LogIn/>}/>


        </Routes>

       
      

    
      
     
    </div>
    </>
  )
}

export default App
