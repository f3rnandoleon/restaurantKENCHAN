import React from 'react'
import"../styles/ubicacion.css"
import {Link } from "react-router-dom";
function Ubicacion() {
  return (
    <main class="fondo_info">
        <section>
        <Link to="/informacion"><img src="src/assets/atras.png" alt="" class="atrass"/></Link>
            <h1>ESTAMOS UBICADOS</h1>
            <h1>Av. Arce. Pasaje Pinilla #2557 La Paz, Bolivia</h1>
            <a href='https://www.google.com/maps/place/Restaurant+Japonés+Kenchan/@-16.5100353,-68.1229494,15z/data=!4m5!3m4!1s0x0:0xc7553bf2435dd7d5!8m2!3d-16.5100353!4d-68.1229494'><img src="src/assets/mapa.png" alt="" class="image_gps"/></a>
        </section>
        <section>
            <a href='https://www.facebook.com/profile.php?id=100063671766297'><img src="src/assets/facebook.png" alt="" /></a>
            <h1>Restaurant Japonés KENCHAN</h1>
            <img src="src/assets/imagen_entrada.png" alt="" />
        </section>
    </main>
  )
}

export {Ubicacion}