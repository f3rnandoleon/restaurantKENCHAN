import React from 'react'
import "../styles/masinformacion.css"
import {Link } from "react-router-dom";
function Masinformacion() {
  return (
    <main class="fondo_info">
       <Link to="/"><img src="src/assets/atras.png" alt="" class="atrass"/></Link>
       <Link to="/ubicacion">
         <button class="ubicacion_box">         
            <div>UBICACION</div>
            <img src="src/assets/puntero.png" alt="" />         
          </button>
        </Link>
        <section class="info_conteiner">           
            <p>Bienvenidos al Restaurante Japones "KENCHAN" un lugar donde pueden disfrutar exquisitos platos en familia, con amigos o solos.</p>
            <img src="src/assets/fotolangosta.png" alt="" />
            <p>Esperamos que se sientan comodos y disfruten del verdadero sabor del japon</p>
        </section>
    </main>
  )
}
export {Masinformacion}