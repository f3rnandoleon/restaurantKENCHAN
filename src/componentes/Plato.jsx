import React from 'react'
import { Descripcion } from './atomos/Descripcion'
import { Imagen } from './atomos/Imagen'
import { Numero } from './atomos/Numero'
import {Link } from "react-router-dom";
import "../styles/plato.css"
function Plato({item}) {
  function question(){
    if(item.id%2!=0)
    {
      return(<Link to="/plato"><button class="plato_css"><Numero item={item} /><Descripcion item={item} /><Imagen item={item} /></button></Link>)
    }else{
      return(<Link to="/plato"><button class="plato_css2"><Imagen item={item}/><Descripcion item={item}/><Numero item={item}/></button></Link>)
    }
  }
  return (
    question()
  )
}

export {Plato}