import { useReducer, useEffect, useMemo } from 'react';
import { InventoryContext } from './InventoryContext';
import { inventoryReducer, initialState, ACTIONS } from '../reducers/inventoryReducer';
import { cartReducer } from '../reducers/cartReducer';
import { esProductoValido } from '../util/validators';

// Componente Proveedor que envolverá la aplicación
export function InventoryProvider({ children }) {
  // Reducer del Inventario General
  const [inventoryState, inventoryDispatch] = useReducer(inventoryReducer, initialState);
  
  // Reducer del Carrito (Estado inicial: arreglo vacío)
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  // useEffect para simular la llamada a la API al cargar la aplicación
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/productos.json`)
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo conectar con el servidor");
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Formato de datos inválido");
        
        // Filtro con validación de productos
        const productosValidos = data.filter(esProductoValido);
        inventoryDispatch({ type: ACTIONS.LOAD_PRODUCTS, payload: productosValidos });
      })
      .catch((error) => {
        inventoryDispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);

  // Memoización del valor del proveedor para evitar re-renderizados innecesarios
  const contextValue = useMemo(() => ({
    inventoryState,
    inventoryDispatch,
    cartState,
    cartDispatch
  }), [inventoryState, cartState]);

  return (
    <InventoryContext.Provider value={contextValue}> 
      {children}
    </InventoryContext.Provider>
  );
}