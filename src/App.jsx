import React from "react"
import "./styles.css"
import { Routes, Route } from "react-router"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ContactScreen/>} /> {/* RUTA PRINCIPAL */}
        <Route path='/contact/:contact_id/messages' element={<ChatScreen/>} />
      </Routes>
    </>
  )
}

export default App

/* 
EL CHATSCREEN SOLO MUESTRA LA LSTA DE CONTACTOS, LO QUE TENGO QUE HACER ES QUE MUESTRE LAS PANTALLAS DE LA IZQUIERDA CON TODA LA CONFIGURACION Y LOS CONTACTOS 
*/
