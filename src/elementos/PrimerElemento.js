import React from 'react'
// Componente PrimerElemento
export const PrimerElemento = () => {
  return (
    // Nodo contenedor principal del componente
    <div>
      {/* Nodo de encabezado h1, muestra mi nombre */}
      <h1>Jossue Salvador Vielma Dominguez</h1>
      {/* Nodo de navegación, contiene enlaces de contacto y redes sociales */}
      <nav>
        <a>Cárdenas</a>
        <a> | </a>
        {/* Nodo de enlace a LinkedIn */}
        <a href= "www.linkedin.com/in/jossue-salvador-vielma-domínguez-774699353" >linkedin</a> 
        <a> | </a>  
         {/* Nodo de enlace a GitHub */}
        <a href="https://github.com/dashboard">github</a>
        <a> | </a>
        <a>jossue.vielma@gmail.com</a>
        <a> | </a>
        <a>+52 993 599 9467</a>
      </nav>
    </div>
  )
}
// Encapsulación: este componente agrupa la información personal y los enlaces de contacto dentro de una única estructura reutilizable. 
// Permite ser llamado en otros componentes sin necesidad de repetir el código, facilitando el mantenimiento y la organización.

// Fin del componente PrimerElemento