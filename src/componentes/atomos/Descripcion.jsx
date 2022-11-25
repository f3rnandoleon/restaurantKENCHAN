import React from 'react'
import "../../styles/plato.css"
function Descripcion({item}) {
  return (
    <div class="description">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
    </div>
  )
}

export {Descripcion}