import React from "react"
import "./styles.css"
import { Routes, Route } from "react-router"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"

function App() {
    

  return (
    <>
      <Routes>
        <Route path='/' element={<ContactScreen/>} />
        <Route path='/contact/:contact_id/messages' element={<ChatScreen/>} />
      </Routes>
    </>
  )
}

export default App
