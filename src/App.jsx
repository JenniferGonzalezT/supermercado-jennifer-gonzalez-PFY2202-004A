import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { InventoryProvider } from './context/InventoryProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import NotFound from './pages/NotFound';
import { rutasNavegacion } from './routes/routes.config';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <InventoryProvider>
        <Navbar />
        
        <main className="pb-20"> 
          <Suspense fallback={<Spinner mensaje="Cargando aplicación..." />}>
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