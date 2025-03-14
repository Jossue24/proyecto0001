import logo from './logo.svg';
import './App.css';
import { PrimerElemento } from './elementos/PrimerElemento';
import SegundoElemento from './elementos/SegundoElemento';
// Componente principal App
function App() {
  return (
    // Nodo raíz del componente, contiene toda la estructura de la aplicación
    <div className="App">
      {/* Nodo de encabezado, sirve como contenedor del logo y otros elementos */}
      <header className="App-header">
        {/* Nodo de imagen, muestra el logo de la aplicación */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        {/* Componente PrimerElemento, encapsula una funcionalidad específica */}
        <PrimerElemento></PrimerElemento>
        {/* Componente SegundoElemento, encapsula otra funcionalidad específica */}
        <SegundoElemento></SegundoElemento>
        <a
        >
        </a>
      </header>
    </div>
  );
}

export default App;