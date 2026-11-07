import { useReducer, useEffect, useMemo } from 'react';
import { InventoryContext } from './InventoryContext';
import { inventoryReducer, initialState, ACTIONS } from '../reducers/inventoryReducer';
import { cartReducer } from '../reducers/cartReducer';
import { esProductoValido } from '../util/validators';
import { useFetch } from '../hooks/useFetch';

// Componente Proveedor que envolverá la aplicación
export function InventoryProvider({ children }) {
  // Reducer del Inventario General
  const [inventoryState, inventoryDispatch] = useReducer(inventoryReducer, initialState);
  
  // Reducer del Carrito (Estado inicial: arreglo vacío)
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  // Usar el custom hook para extraer los datos del JSON
  const { data, error } = useFetch(`${import.meta.env.BASE_URL}data/productos.json`);

  // useEffect para detectar los cambios en 'data' y 'error' arrojados por el hook
  useEffect(() => {
    if (data) {
      if (!Array.isArray(data)) {
        inventoryDispatch({ type: ACTIONS.SET_ERROR, payload: "Formato de datos inválido" });
        return;
      }
      
      // Filtro con validación de productos
      const productosValidos = data.filter(esProductoValido);
      inventoryDispatch({ type: ACTIONS.LOAD_PRODUCTS, payload: productosValidos });
    }
    
    if (error) {
      inventoryDispatch({ type: ACTIONS.SET_ERROR, payload: error });
    }
  }, [data, error]); // Solo se ejecuta cuando el hook resuelve la petición

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