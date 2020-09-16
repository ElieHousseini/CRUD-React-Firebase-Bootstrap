import React from "react"
import "./App.css"
import Contacts from "./components/Contacts"

function App() {
  return (
    // Adding basic general partition of the page using BOotstrap
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
        <Contacts />
      </div>
    </div>
  )
}

export default App
