import React from 'react'

function Imagen({item}) {
  return (
    <div>
        <img src={item.image} alt="" />
    </div>
  )
}

export {Imagen}