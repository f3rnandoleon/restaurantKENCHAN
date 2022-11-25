import React from "react";
import { Link } from "react-router-dom";
import "../styles/detallesPlato.css"
import { Encabezado } from "./Encabezado";
function DetallesPlato({item}) {
  function ingrediente()
  {
    const x=item.ingredientes;
     for(let i=0;i<x.length;i++){
         return(x.map(x=><lo><li>{x}</li></lo>))
     }
  }
  return (
    <main>

      <section>
        <Encabezado item={item}/>
        <img src={item.image} alt="" class="imagen_plato"/>
        <div class="puntuacion">
            <img src="src/assets/star.png" alt="" />
            <span>{"4.5(10+)  "}</span>
            <Link to="/resenas"><u>Ver Reseñas</u></Link>
        </div>
      </section>
      <section class="informacion">
        <div>
          <h1>{`Bs ${item.price}`}</h1>
          <p>
            {item.description}
          </p>
        </div>
        <div>
            <h2>Tiempo de preparacion</h2>
            <span>{item.time}</span>
        </div>
        <div>
            <h2>Ingredientes</h2>
            <lo></lo>       
               {ingrediente()}   
            
        </div>
      </section>
    </main>
  );
}

export { DetallesPlato };
