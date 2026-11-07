import { useMemo } from 'react';
import SucursalCard from '../components/SucursalCard';
import Spinner from '../components/Spinner';
import { esSucursalValida } from '../util/validators';
import { useFetch } from '../hooks/useFetch';

export default function NuestrasTiendas() {
  // Llamar al custom hook pasándole la ruta exacta
  const { data, cargando, error, reintentar } = useFetch(`${import.meta.env.BASE_URL}data/sucursales.json`);

  // Uso de useMemo para filtrar la lista solo cuando 'data' cambie, sin provocar dobles renderizados.
  const sucursales = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    return data.filter(esSucursalValida);
  }, [data]);

  // Renderizado condicional de carga
  if (cargando) {
    return <Spinner mensaje="Cargando ubicaciones de tiendas..." />;
  }

  // Renderizado condicional de error: Si hay error de red, o si los datos cargaron pero ninguna sucursal es válida
  if (error || (data && sucursales.length === 0)) {
    return (
      <div className="max-w-3xl mx-auto px-4 mt-20 mb-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm text-center">
          <p className="text-red-700 font-medium text-lg mb-4">Lo sentimos, hubo un problema al cargar las sucursales</p>
          <button 
            onClick={reintentar}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors shadow-sm"
          >
            Reintentar conexión
          </button>
        </div>
      </div>
    );
  }

  // Renderizado principal
  return (
    <div className="max-w-6xl mx-auto px-4 mt-12 mb-12">
      <h2 className="text-3xl font-bold text-color-oscuro mb-4">Nuestras Tiendas</h2>
      <p className="text-lg text-gray-600 text-justify mb-8">
        Conoce las ubicaciones de nuestras principales sucursales y centros de distribución:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sucursales.map((sucursal) => (
          <SucursalCard 
            key={sucursal.id}
            sucursal={sucursal}
          />
        ))}
      </div>
    </div>
  );
}