import { useState, useEffect } from 'react';
import SucursalCard from '../components/SucursalCard';
import { esSucursalValida } from '../util/validators';

export default function NuestrasTiendas() {
  // Estados para gestionar los datos, la carga, los errores y los reintentos
  const [sucursales, setSucursales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intentos, setIntentos] = useState(0); 

  useEffect(() => {
    // Instanciar AbortController para cancelar la petición si el componente se desmonta
    const controlador = new AbortController();
    const signal = controlador.signal;

    fetch('data/sucursales.json', { signal: signal })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo conectar con el servidor de sucursales');
        }
        return respuesta.json();
      })
      .then((datos) => {
        // Validar que la respuesta sea un arreglo
        if (!Array.isArray(datos)) {
          throw new Error('El formato de datos recibido no es una lista válida');
        }

        // Filtrar usando la función validadora de seguridad
        const sucursalesValidas = datos.filter(esSucursalValida);

        if (sucursalesValidas.length === 0) {
          throw new Error('Ninguna sucursal cumple con el formato requerido de seguridad');
        }

        setSucursales(sucursalesValidas);
        setCargando(false);
      })
      .catch((err) => {
        // Ignorar el error si fue provocado por el desmontaje del componente
        if (err.name === 'AbortError') {
          console.log('Fetch cancelado: El componente se desmontó antes de terminar la petición.');
        } else {
          console.error('Error al cargar sucursales:', err);
          setError(err.message);
          setCargando(false);
        }
      });

    // Cleanup function
    return () => controlador.abort();
  }, [intentos]); 

  // Función para volver a disparar el useEffect
  const manejarReintento = () => {
    setCargando(true);
    setError(null);
    setIntentos((prev) => prev + 1);
  };

  // Renderizado condicional: Spinner de carga estilizado con Tailwind
  if (cargando) {
    return (
      <div className="max-w-6xl mx-auto px-4 mt-20 mb-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-acento-verdoso mx-auto mb-4"></div>
        <p className="text-gray-600 font-semibold text-lg">Cargando ubicaciones de tiendas...</p>
      </div>
    );
  }

  // Renderizado condicional: Mensaje de error y botón de reintento
  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 mt-20 mb-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm text-center">
          <p className="text-red-700 font-medium text-lg mb-4">Lo sentimos, hubo un problema al cargar las sucursales</p>
          <button 
            onClick={manejarReintento}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors shadow-sm"
          >
            Reintentar conexión
          </button>
        </div>
      </div>
    );
  }

  // Renderizado del catálogo principal
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
            nombre={sucursal.nombre}
            direccion={sucursal.direccion}
            estado={sucursal.estado}
            estadoClase={sucursal.estadoClase}
          />
        ))}
      </div>
    </div>
  );
}