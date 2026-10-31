import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Routes>
            {/* Generación dinámica de rutas compartidas */}
            {rutasNavegacion.map((ruta) => (
              <Route key={ruta.path} path={ruta.path} element={ruta.element} />
            ))}
            
            {/* Ruta comodín 404 estática */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </InventoryProvider>
    </Router>
  );
}

export default App;