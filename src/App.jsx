import React from "react"
import "./styles.css"
import ChatScreen from "../Screens/ChatScreen"
import ContactScreen from "../Screens/ContactScreen"
import { Routes, Route } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ContactScreen/>} /> {/* RUTA PRINCIPAL */}
        <Route path='/contact/:contact_id/messages' element={<ChatScreen/>} />
        {/* CUANDO ESTEMOS EN LA DIRECCION MESSAGES, VAS A MOSTRAR CHATSCREEN */}
      </Routes>
    </>
  )
}

export default App

/* 
EL CHATSCREEN SOLO MUESTRA LA LSTA DE CONTACTOS, LO QUE TENGO QUE HACER ES QUE MUESTRE LAS PANTALLAS DE LA IZQUIERDA CON TODA LA CONFIGURACION Y LOS CONTACTOS 
*/
