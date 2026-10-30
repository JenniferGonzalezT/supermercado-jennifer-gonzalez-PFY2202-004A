import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import IngresoArticulos from './pages/IngresoArticulos';
import Inventario from './pages/Inventario';
import NotFound from './pages/NotFound';

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
          <Route path="/ingreso" element={<IngresoArticulos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </InventoryProvider>
  );
}

export default App;