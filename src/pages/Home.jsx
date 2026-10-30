import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-12">
      <div className="p-10 md:p-16 text-center bg-white shadow-lg rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-color-oscuro mb-4">
          Gestión de Inventario
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Bienvenido al sistema central de inventario del Supermercado.
        </p>
        
        <hr className="my-8 border-gray-200" />
        
        <p className="text-gray-600 mb-8">
          Desde aquí podrás administrar los productos, revisar el stock y control de todas nuestras sucursales.
        </p>
        
        <Link 
          to="/inventario" 
          className="inline-block px-8 py-3 bg-acento-verdoso hover:bg-acento-hover text-white text-lg font-semibold rounded-lg transition-colors shadow-sm"
        >
          Revisar Stock Actual
        </Link>
      </div>
    </div>
  );
}