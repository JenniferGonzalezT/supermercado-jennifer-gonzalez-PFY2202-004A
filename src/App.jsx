import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryProvider';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import IngresoArticulos from './pages/IngresoArticulos';
import Inventario from './pages/Inventario';
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
          <Route path="/ingreso" element={<IngresoArticulos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-color-claro">
                <h2 className="text-6xl font-bold text-acento-verdoso mb-4">404</h2>
                <p className="text-2xl text-color-oscuro">Página no encontrada</p>
              </div>
            } />
        </Routes>

        <Footer />
      </Router>
    </InventoryProvider>
  );
}

export default App;