import Home from '../pages/Home';
import QuienesSomos from '../pages/QuienesSomos';
import NuestrasTiendas from '../pages/NuestrasTiendas';
import IngresoArticulos from '../pages/IngresoArticulos';
import Inventario from '../pages/Inventario';
import DetalleArticulo from '../pages/DetalleArticulo';
import Carrito from '../pages/Carrito';

export const rutasNavegacion = [
  { path: '/', label: 'Inicio', element: <Home />, showInMenu: true },
  { path: '/quienes-somos', label: 'Quiénes Somos', element: <QuienesSomos />, showInMenu: true },
  { path: '/nuestras-tiendas', label: 'Nuestras Tiendas', element: <NuestrasTiendas />, showInMenu: true },
  { path: '/ingreso', label: 'Ingresar Artículo', element: <IngresoArticulos />, showInMenu: true },
  { path: '/inventario', label: 'Ver Inventario', element: <Inventario />, showInMenu: true },
  { path: '/detalle/:id', label: 'Detalle', element: <DetalleArticulo />, showInMenu: false },
  { path: '/carrito', label: 'Mi Carrito', element: <Carrito />, showInMenu: true }
];