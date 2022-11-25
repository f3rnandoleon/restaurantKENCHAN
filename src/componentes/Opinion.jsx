import React from 'react'
import "../styles/opinion.css"
function Opinion() {
  return (
    <div class="opinion_css">
        <img src="src/assets/image_perfil.png" alt="" />
        <div>
            <h3>{"Nombre usuario"}</h3>
            <div class="detalles_comentarios">
                <img src="src/assets/star.png" alt="" />
                <span>{"3/5 (puntuacion)"}</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
    </div>
  )
}

export {Opinion}