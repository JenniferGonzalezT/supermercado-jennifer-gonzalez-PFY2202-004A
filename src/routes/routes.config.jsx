/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const QuienesSomos = lazy(() => import('../pages/QuienesSomos'));
const NuestrasTiendas = lazy(() => import('../pages/NuestrasTiendas'));
const IngresoArticulos = lazy(() => import('../pages/IngresoArticulos'));
const Inventario = lazy(() => import('../pages/Inventario'));
const DetalleArticulo = lazy(() => import('../pages/DetalleArticulo'));
const Carrito = lazy(() => import('../pages/Carrito'));

export const rutasNavegacion = [
  { path: '/', label: 'Inicio', element: <Home />, showInMenu: true },
  { path: '/quienes-somos', label: 'Quiénes Somos', element: <QuienesSomos />, showInMenu: true },
  { path: '/nuestras-tiendas', label: 'Nuestras Tiendas', element: <NuestrasTiendas />, showInMenu: true },
  { path: '/ingreso', label: 'Ingresar Artículo', element: <IngresoArticulos />, showInMenu: true },
  { path: '/inventario', label: 'Ver Inventario', element: <Inventario />, showInMenu: true },
  { path: '/detalle/:id', label: 'Detalle', element: <DetalleArticulo />, showInMenu: false },
  { path: '/carrito', label: 'Mi Carrito', element: <Carrito />, showInMenu: true }
];