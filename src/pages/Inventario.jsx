import { useState } from 'react';
import { Link } from 'react-router';
import { useInventory } from '../context/InventoryContext';
import Spinner from '../components/Spinner';
import { TIPOS_PERMITIDOS, CATEGORIA_TODOS } from '../util/validators';

export default function Inventario() {
  const { inventoryState } = useInventory();
  const { products, loading, error } = inventoryState;

  // Estado local para manejar el filtro seleccionado
  const [filtroCategoria, setFiltroCategoria] = useState(CATEGORIA_TODOS);

  // Filtrado dinámico sin modificar los datos originales
  const productosFiltrados = filtroCategoria === CATEGORIA_TODOS 
    ? products 
    : products.filter(product => product.tipo === filtroCategoria);

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-color-oscuro mb-8">
          Inventario Actual de Artículos
        </h2>

        {/* Estado de carga: Muestra un spinner mientras fetch hace su trabajo */}
        {loading ? (
          <Spinner mensaje="Cargando inventario..." />
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

            {/* Controles de Filtro */}
            <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
              <label htmlFor="filtro-categoria" className="font-medium text-gray-700">
                Filtrar por Categoría:
              </label>
              <select 
                id="filtro-categoria"
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
                className="ml-4 block w-64 rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              >
                <option value={CATEGORIA_TODOS}>Todas las categorías</option>
                {TIPOS_PERMITIDOS.map(categoria => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>

            {/* Tabla renderizando productosFiltrados en lugar de products */}
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="tabla-encabezado">ID</th>
                    <th className="tabla-encabezado">Nombre</th>
                    <th className="tabla-encabezado">Marca</th>
                    <th className="tabla-encabezado">Tipo</th>
                    <th className="tabla-encabezado">Stock</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {productosFiltrados && productosFiltrados.length > 0 ? (
                    productosFiltrados.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="tabla-data font-medium">
                          <Link to={`/detalle/${product.id}`} className="text-acento-verdoso hover:text-acento-hover hover:underline">
                            {product.id}
                          </Link>
                        </td>

                        <td className="tabla-data font-medium text-gray-900">
                          {product.nombre}
                          {/* Solo se mostrará si el producto tiene la bandera temporal de nuevo */}
                          {product.isNew && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                              Nuevo
                            </span>
                          )}
                        </td>

                        <td className="tabla-data text-gray-500">{product.marca}</td>
                        
                        <td className="tabla-data text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {product.tipo}
                          </span>
                        </td>

                        <td className={`tabla-data font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {product.stock} un.
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-500">
                        No se encontraron artículos en esta categoría.
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