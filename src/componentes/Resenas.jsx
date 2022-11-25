import React from 'react'
import { Encabezado } from './Encabezado'
import { Opinion } from './Opinion'
import "../styles/opinion.css"
import { Link } from 'react-router-dom'
function Resenas({product}) {
  return (
    <main>
        <div class="encabezado">   
            <Link to="/plato"><img src="src/assets/atras.png" alt="" class="image_atras" /></Link>
            <span>Reseñas</span>
        </div>
        <div class ="opinar">Escriba Su experiencia</div>
        <Opinion />
        <Opinion />
        <Opinion />
    </main>
  )
}

export {Resenas}