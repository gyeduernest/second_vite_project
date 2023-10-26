import React from "react"
import DesktopNavBar from "./DesktopNav"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Hero"
import Setup from "./pages/Getstarted"
import MyFeatures from "./pages/Features"
import MyTestimony from "./Main_components/Testimonials"
import SignUp from "./Main_components/Register"
import LogIn from "./Main_components/Login"




function App() {

  return (
    <div 
    
    className="lg:p-5 bg-slate-900">
      <div className="fixed z-50 top-0 backdrop-blur-md lg:w-full w-full">
    <DesktopNavBar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/getstarted" element={<Setup/>}/>
        <Route path="/features" element={<MyFeatures/>}/>
        <Route path="/testimony" element={<MyTestimony/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Login" element={<LogIn/>}/>

      </Routes>
      



       
      

    
      
     
    </div>
  )
}

export default App
