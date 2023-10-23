import React from "react"
import Home from "./pages/Landingpage"
import DesktopNavBar from "./DesktopNav"


function App() {

  return (
    <>
    <div className="lg:p-5 bg-slate-950">
      <div className="fixed z-50 top-0 backdrop-blur-md lg:w-full w-full">
    <DesktopNavBar/>
      </div>
      <div className="lg:mt-3">
      <Home/>
      </div>
   
      

    
      
     
    </div>
    </>
  )
}

export default App
