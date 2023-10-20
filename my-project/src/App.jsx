import React from "react"
import NavBar from "./NavBar"
import Home from "./pages/Home"
import MyTestimony from "./Main_components/nested_comps"


function App() {

  return (
    <>
    <div className="lg:p-5 bg-slate-950">
      <div className="fixed z-50 top-2">
    <NavBar/>
      </div>

      <Home/>

      <MyTestimony/>
      

    
      
     
    </div>
    </>
  )
}

export default App
