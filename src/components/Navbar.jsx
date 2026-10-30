import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para aplicar estilos dinámicos al enlace activo usando Tailwind
  const linkClass = ({ isActive }) => 
    isActive 
      ? "text-white font-bold border-b-2 border-white pb-1 transition-all"
      : "text-white/70 hover:text-white hover:-translate-y-0.5 transition-all";

  return (
    <nav className="bg-acento-verdoso p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-4">
        
        {/* Contenedor del Logo y Botón Hamburguesa */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link 
            to="/" 
            className="text-white text-2xl font-bold tracking-wider whitespace-nowrap"
          >
            🛒 Supermercado
          </Link>

          {/* Botón Hamburguesa (Solo visible en móviles) */}
          <button 
            className="text-white md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                // Ícono de "X" para cerrar
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Ícono de 3 líneas (Hamburguesa)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Contenedor de Enlaces */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-4 w-full md:w-auto mt-4 md:mt-0 transition-all`}>
          {/* Se agrega un onClick para cerrar el menú móvil automáticamente al seleccionar una opción */}
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Inicio</NavLink>
          <NavLink to="/quienes-somos" className={linkClass} onClick={() => setIsOpen(false)}>Quiénes Somos</NavLink>
          <NavLink to="/nuestras-tiendas" className={linkClass} onClick={() => setIsOpen(false)}>Nuestras Tiendas</NavLink>
          <NavLink to="/ingreso" className={linkClass} onClick={() => setIsOpen(false)}>Ingresar Artículo</NavLink>
          <NavLink to="/inventario" className={linkClass} onClick={() => setIsOpen(false)}>Ver Inventario</NavLink>
        </div>
      </div>
    </nav>
  );
}