import React from "react"
import Home from "./pages/Home"
import DesktopNavBar from "./DesktopNav"


function App() {

  return (
    <>
    <div className="lg:p-5 bg-slate-950">
      <div className="fixed z-50 top-0 backdrop-blur-md lg:w-full w-full">
    <DesktopNavBar/>
      </div>

      <Home/>

   
      

    
      
     
    </div>
    </>
  )
}

export default App
