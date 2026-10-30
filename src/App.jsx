import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import Footer from './components/Footer';

function App() {
  return (
    <InventoryProvider>
      <Router basename={import.meta.env.BASE_URL}>
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
    </InventoryProvider>
  );
}

export default App;