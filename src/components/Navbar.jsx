import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  // Función para aplicar estilos dinámicos al enlace activo usando Tailwind
  const linkClass = ({ isActive }) => 
    isActive 
      ? "text-white font-bold border-b-2 border-white pb-1 transition-all"
      : "text-white/70 hover:text-white hover:-translate-y-0.5 transition-all";

  return (
    <nav className="bg-acento-verdoso p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <Link to="/" className="text-white text-2xl font-bold tracking-wider">
          🛒 Supermercado
        </Link>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/quienes-somos" className={linkClass}>Quiénes Somos</NavLink>
          <NavLink to="/nuestras-tiendas" className={linkClass}>Nuestras Tiendas</NavLink>
          <NavLink to="/ingreso" className={linkClass}>Ingresar Artículo</NavLink>
          <NavLink to="/inventario" className={linkClass}>Ver Inventario</NavLink>
        </div>
      </div>
    </nav>
  );
}