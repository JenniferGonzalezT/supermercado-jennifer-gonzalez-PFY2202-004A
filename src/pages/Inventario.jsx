import { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

export default function Inventario() {
  // Consumir el objeto 'state' completo desde el contexto
  const { state } = useContext(InventoryContext);
  
  // Extraer las variables del estado
  const { products, loading, error } = state;

  return (
    <div className="min-h-screen bg-color-claro py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-color-oscuro mb-8">
          Inventario Actual de Artículos
        </h2>

        {/* Estado de carga: Muestra un spinner mientras fetch hace su trabajo */}
        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-acento-verdoso mx-auto mb-4"></div>
            <p className="text-gray-600 font-semibold">Cargando inventario...</p>
          </div>
        ) : (
          <>
            {/* Estado de error: Alerta visual que NO bloquea el resto de la interfaz */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
                <p className="text-red-700 font-medium text-justify">
                  Problema de conexión al cargar inventario, aún así se encuentra habilitado para ingresos manuales.
                </p>
              </div>
            )}

            {/* La tabla se renderiza siempre que no esté cargando (incluso si hay error) */}
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marca</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Validar que products exista y tenga elementos */}
                  {products && products.length > 0 ? (
                    products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {product.nombre}
                          {/* Solo se mostrará si el producto tiene la bandera temporal de nuevo */}
                          {product.isNew && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              Nuevo
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.marca}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {product.tipo}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-sm text-gray-500">
                        No hay artículos en el inventario actual.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}