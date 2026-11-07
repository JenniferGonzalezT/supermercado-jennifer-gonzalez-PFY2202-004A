import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { InventoryProvider } from './context/InventoryProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { rutasNavegacion } from './routes/routes.config';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <InventoryProvider>
        <Navbar />
        
        <main className="pb-20"> 
          <Suspense fallback={<div className="text-center mt-20">Cargando aplicación...</div>}>
            <Routes>
              {/* Generación dinámica de rutas compartidas */}
              {rutasNavegacion.map((ruta) => (
                <Route key={ruta.path} path={ruta.path} element={ruta.element} />
              ))}
              
              {/* Ruta comodín 404 estática */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </InventoryProvider>
    </Router>
  );
}

export default App;