import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useInventory } from '../context/InventoryContext';

export default function DetalleArticulo() {
  const { id } = useParams(); // Obtener el ID desde la URL
  const navigate = useNavigate();
  
  // Consumir el contexto global
  const { inventoryState, inventoryDispatch, cartDispatch } = useInventory();
  const { products, loading } = inventoryState;

  // Estado local para controlar la notificación visual (Toast) al agregar al carrito
  const [showToast, setShowToast] = useState(false);

  // Mostrar estado de carga general si el inventario aún está siendo leído del JSON
  if (loading) return <div className="text-center mt-20">Cargando detalle del producto...</div>;

  // Buscar el producto que coincide con el ID de la URL
  const producto = products.find((p) => String(p.id) === String(id));

  // Manejo de error si el ID no existe
  if (!producto) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl text-red-600 font-bold mb-4">Artículo no encontrado</h2>
        <button onClick={() => navigate('/inventario')} className="text-acento-verdoso hover:underline">
          ← Volver al inventario
        </button>
      </div>
    );
  }

  // Manejador del botón agregar al carrito
  const handleAgregarCarrito = () => {
    if (producto.stock <= 0) {
      return;
    }
    
    cartDispatch({ type: 'ADD_ITEM', payload: producto });
    inventoryDispatch({ type: 'DECREASE_STOCK', payload: { id: producto.id, cantidad: 1 } });
    
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-color-claro py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Notificación flotante (Toast) */}
      {showToast && (
        <div className="absolute top-4 right-4 bg-acento-verdoso text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-opacity duration-300 z-50 animate-bounce">
          ¡1 unidad de {producto.nombre} agregada al carrito!
        </div>
      )}

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <button onClick={() => navigate('/inventario')} className="mb-6 text-sm text-gray-500 hover:text-gray-700">
          ← Volver al inventario
        </button>
        
        <h2 className="text-3xl font-bold text-color-oscuro mb-2">{producto.nombre}</h2>
        <p className="text-lg text-gray-600 mb-6">Marca: {producto.marca}</p>
        
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-8 border">
          <div>
            <p className="text-sm text-gray-500">Categoría</p>
            <p className="font-semibold">{producto.tipo}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Stock Disponible</p>
            <p className={`text-2xl font-bold ${producto.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {producto.stock}
            </p>
          </div>
        </div>

        <button 
          onClick={handleAgregarCarrito}
          disabled={producto.stock <= 0}
          className={`w-full py-3 px-4 rounded-md shadow-sm text-white font-bold transition-colors ${
            producto.stock > 0 
              ? 'bg-acento-verdoso hover:bg-acento-hover' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {producto.stock > 0 ? 'Agregar al Carrito (1 un.)' : 'Sin Stock'}
        </button>
      </div>
    </div>
  );
}