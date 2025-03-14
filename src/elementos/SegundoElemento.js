import React from 'react'
// Componente SegundoElemento
export default function SegundoElemento() {
  return (
    // Nodo contenedor principal del componente
    <div>
      {/* Sección de Educación */}
     <h2>Educación</h2>
     <hr />
     <div class="item">
         <h3>Universidad Juárez Autónoma de Tabasco </h3>
         <p>Cunduacan, Tabasco</p>
         <p>6°to semestre </p>
         <p>2022</p>
      </div>
      {/* Sección de Experiencia Laboral */}
      <h2>Experiencia Laboral</h2>
      <hr />
      <div class="item">
      <h3>Nombre de la compañía: Sam's Club</h3>
      <p>Puesto: Demo</p>
      <p>Logros obtenidos: Máximo vendedor de productos</p>
      <p>Actividades realizadas:</p>
      <p>Ofrecí diferentes degustaciones a los socios</p>
      <p>Tecnologías usadas: equipo electrodoméstico</p>
      <p>Lugar: Cárdenas, Tabasco</p>
      <p>Fecha: Octubre de 2024 – Noviembre de 2025</p>
      </div>
      {/* Sección de Proyectos y Voluntariados */}
      <h2>Proyectos y Voluntariados</h2>
      <hr />
      <div class="item">
      <h3>Nombre de la organización: Primaria Alcides Flota Oropeza</h3>
      <p>Nombre del puesto: Ayudante de reparaciones</p>
      <p>Actividades realizadas:</p>
      <p>Ayudé a reparar dispositivos de computación en una escuela pública</p>
      <p>Lugar: Cárdenas, Tabasco</p>
      <p>Fecha: Enero de 2023</p>
      </div>
       {/* Sección de Certificaciones */}
      <h2>Certificaciones</h2>
      <hr />
      <div class="item">
      <h3>Nombre de la certificación: Cisco Certified Network Associate</h3>
      <p>Empresa certificadora: Cisco</p>
      <p>Lugar: Cunduacán, Tabasco</p>
      <p>Fecha de certificación: Noviembre de 2024</p>
      </div>
    </div>
  )
}
// Encapsulación: este componente agrupa información sobre educación, experiencia laboral, proyectos y certificaciones dentro de una estructura reutilizable. 
// Permite ser llamado en otros componentes sin repetir el código, facilitando la organización y mantenimiento.

// Fin del componente SegundoElemento