import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import Footer from './components/Footer';

function App() {
  return (
    // Router envuelve toda la aplicación para habilitar el enrutamiento
    // Agregamos el basename para que reconozca la URL de GitHub Pages
    <Router basename="/supermercado-jennifer-gonzalez-PFY2202-004A/">
      {/* Navbar y Footer quedan fuera de Routes para que se muestren en todas las pantallas */}
      <Navbar />
      
      {/* Routes decide qué componente renderizar según la URL actual */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;