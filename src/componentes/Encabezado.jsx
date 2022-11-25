import React from 'react'
import "../styles/encabezado.css";
import {Link } from "react-router-dom";
function Encabezado({item}) {
  return (
    <div class="encabezado">
            <Link to="/"><img src="src/assets/atras.png" alt="" class="image_atras" /></Link>
            <span>{item.name}</span>
        </div>
  )
}

export {Encabezado}