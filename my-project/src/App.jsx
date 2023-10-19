import React from "react"
import {PrimaryBtn, SecondaryBtn, TertiaryBtn } from "./Components"
import NavBar from "./NavBar"
import LogIn from "./Main_components/Login"
import SignUp from "./Main_components/Register"

function App() {

  return (
    <>
    <div className="w-screen  lg:p-20 bg-slate-100">
      Buttons
        <PrimaryBtn  text="get started" />
        <SecondaryBtn  text="Secondary button"/>
        <TertiaryBtn text="delete" />
        Nav bar
        <NavBar/>

        form
        <LogIn/>
        <div className="mb-10"></div>
        <SignUp/>
    </div>
    </>
  )
}

export default App
