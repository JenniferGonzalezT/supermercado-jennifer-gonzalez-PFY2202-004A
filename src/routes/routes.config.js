import Home from '../pages/Home';
import QuienesSomos from '../pages/QuienesSomos';
import NuestrasTiendas from '../pages/NuestrasTiendas';
import IngresoArticulos from '../pages/IngresoArticulos';
import Inventario from '../pages/Inventario';

export const rutasNavegacion = [
  { path: '/', label: 'Inicio', element: <Home /> },
  { path: '/quienes-somos', label: 'Quiénes Somos', element: <QuienesSomos /> },
  { path: '/nuestras-tiendas', label: 'Nuestras Tiendas', element: <NuestrasTiendas /> },
  { path: '/ingreso', label: 'Ingresar Artículo', element: <IngresoArticulos /> },
  { path: '/inventario', label: 'Ver Inventario', element: <Inventario /> }
];