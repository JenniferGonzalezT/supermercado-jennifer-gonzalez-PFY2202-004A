import { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import { useNavigate } from 'react-router';
import { CART_ACTIONS } from '../reducers/cartReducer';

export default function Carrito() {
  const navigate = useNavigate();
  const { cartState, cartDispatch, inventoryState, inventoryDispatch } = useInventory();

  // Estado local para manejar las notificaciones (Toast) de la pantalla del Carrito
  const [toastInfo, setToastInfo] = useState({ show: false, message: '', isError: false });

  // Función para disparar notificaciones
  const showToast = (message, isError = false) => {
    setToastInfo({ show: true, message, isError });
    setTimeout(() => {
      setToastInfo({ show: false, message: '', isError: false });
    }, 3000);
  };

  // Funciones manejadoras para los botones del carrito
  const handleAumentar = (item, stockReal) => {
    if (stockReal > 0) {
      cartDispatch({ type: CART_ACTIONS.INCREASE_QTY, payload: { id: item.id } });
      inventoryDispatch({ type: 'DECREASE_STOCK', payload: { id: item.id, cantidad: 1 } });
    } else {
      showToast("No queda más stock disponible de este producto.", true);
    }
  };

  const handleDisminuir = (item) => {
    cartDispatch({ type: CART_ACTIONS.DECREASE_QTY, payload: { id: item.id } });
    inventoryDispatch({ type: 'INCREASE_STOCK', payload: { id: item.id, cantidad: 1 } });
  };

  // Calcular el total de unidades que lleva el usuario
  const totalUnidades = cartState.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="relative min-h-screen bg-color-claro py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Toast Flotante Reutilizable */}
      {toastInfo.show && (
        <div className={`absolute top-4 right-4 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-opacity duration-300 z-50 animate-bounce ${toastInfo.isError ? 'bg-red-500' : 'bg-green-500'}`}>
          {toastInfo.message}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-color-oscuro mb-8">
          Tu Carrito de Compras
        </h2>

        {cartState.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-xl shadow-md">
            <p className="text-xl text-gray-500 mb-6">Tu carrito está vacío.</p>
            <button 
              onClick={() => navigate('/inventario')}
              className="px-6 py-3 bg-acento-verdoso text-white font-bold rounded-md hover:bg-acento-hover transition"
            >
              Ir al Inventario
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cartState.map((item) => {
                const stockReal = inventoryState.products.find(p => p.id === item.id)?.stock || 0;

                return (
                  <li key={item.id} className="p-6 flex justify-between items-center hover:bg-gray-50">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.nombre}</h3>
                      <p className="text-sm text-gray-500">{item.marca} ({item.tipo})</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {/* Disminuir cantidad */}
                      <button 
                        onClick={() => handleDisminuir(item)}
                        className="w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold hover:bg-red-200 transition flex justify-center items-center"
                      >
                        -
                      </button>
                      
                      <span className="text-xl font-bold w-8 text-center">{item.cantidad}</span>
                      
                      {/* Aumentar cantidad */}
                      <button 
                        onClick={() => handleAumentar(item, stockReal)} 
                        disabled={stockReal <= 0} 
                        className={`w-10 h-10 rounded-full font-bold transition flex justify-center items-center ${
                          stockReal > 0 
                            ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        title={stockReal <= 0 ? "Sin stock disponible" : "Añadir más"}
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Resumen total */}
            <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">
              <span className="text-lg text-gray-600 font-medium">Total de artículos:</span>
              <span className="text-2xl font-bold text-color-oscuro">{totalUnidades} unidades</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}