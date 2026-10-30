import { useState, useEffect } from 'react';
import SucursalCard from '../components/SucursalCard';

export default function NuestrasTiendas() {
  // Estado inicial: un arreglo vacío mientras cargan los datos
  const [sucursales, setSucursales] = useState([]);
  const [loading, setLoading] = useState(true); // Estado extra para mostrar que está cargando

  // Efecto secundario: Ejecuta la llamada a la API simulada (archivo JSON) al montar el componente
  useEffect(() => {
    fetch('data/sucursales.json')
      .then((response) => response.json())
      .then((data) => {
        setSucursales(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar las sucursales:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-12 mb-12">
      <h2 className="text-3xl font-bold text-color-oscuro mb-4">Nuestras Tiendas</h2>
      <p className="text-lg text-gray-600 mb-8 text-justify">
        Conoce las ubicaciones de nuestras principales sucursales y centros de distribución:
      </p>
      
      {loading ? (
        <div className="text-center text-gray-500 py-10">
          Cargando información de sucursales...
        </div>
      ) : (
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
      )}
    </div>
  );
}