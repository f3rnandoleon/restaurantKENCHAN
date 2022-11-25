import React from 'react'
import '../styles/inicio.css'
import {Link } from "react-router-dom";
function Inicio() {
  return (
    <main class="fondo">
        <img src="src/assets/logo.png" alt="" class="image"/>
        <div class="buttons">
            <button><Link to="/menu">MENU</Link></button>
            <button><Link to="/informacion">INFORMACION</Link></button>
        </div>
    </main>
  )
}

export {Inicio} 