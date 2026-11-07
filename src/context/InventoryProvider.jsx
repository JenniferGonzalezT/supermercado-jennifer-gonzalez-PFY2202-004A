import { useReducer, useEffect } from 'react';
import { InventoryContext } from './InventoryContext';
import { inventoryReducer, initialState, ACTIONS } from '../reducers/inventoryReducer';
import { cartReducer } from '../reducers/cartReducer';

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
        inventoryDispatch({ type: ACTIONS.LOAD_PRODUCTS, payload: data });
      })
      .catch((error) => {
        inventoryDispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);

  return (
    <InventoryContext.Provider value={{ inventoryState, inventoryDispatch, cartState, cartDispatch }}> 
      {children}
    </InventoryContext.Provider>
  );
}