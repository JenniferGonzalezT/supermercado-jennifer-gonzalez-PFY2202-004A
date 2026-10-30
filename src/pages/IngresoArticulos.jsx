import { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';
import { useNavigate } from 'react-router-dom';

export default function IngresoArticulos() {
  const { addProduct } = useContext(InventoryContext);
  const navigate = useNavigate();

  // Estados locales para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!nombre || !marca || !tipo) return;

    // Usar el dispatch del contexto
    addProduct({ nombre, marca, tipo });

    // Limpiar los campos
    setNombre('');
    setMarca('');
    setTipo('');

    // Redirigimos a la tabla para ver el producto recién agregado
    navigate('/inventario');
  };

  return (
    <div className="min-h-screen bg-color-claro py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h2 className="text-2xl font-bold text-center text-color-oscuro mb-6">Ingreso de Nuevo Artículo</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              placeholder="Ej. Arroz Grado 1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Marca</label>
            <input 
              type="text" 
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              placeholder="Ej. Tucapel"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Producto</label>
            <select 
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-acento-verdoso focus:ring focus:ring-acento-verdoso focus:ring-opacity-50 p-2 border"
              required
            >
              <option value="">Seleccione un tipo...</option>
              <option value="Abarrotes">Abarrotes</option>
              <option value="Lácteos">Lácteos</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Limpieza">Limpieza</option>
              <option value="Congelados">Congelados</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-acento-verdoso hover:bg-acento-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-acento-verdoso transition-colors"
          >
            Agregar al Inventario
          </button>
        </form>
      </div>
    </div>
  );
}