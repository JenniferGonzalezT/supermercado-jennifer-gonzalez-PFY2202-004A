import { useReducer, useEffect } from 'react';
import { InventoryContext } from './InventoryContext';
import { inventoryReducer, initialState, ACTIONS } from '../reducers/inventoryReducer';

// Componente Proveedor que envolverá la aplicación
export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  // useEffect para simular la llamada a la API al cargar la aplicación
  useEffect(() => {
    fetch('data/productos.json')
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo conectar con el servidor de inventario");
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.LOAD_PRODUCTS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);

  // Función de ayuda para despachar la acción más fácilmente
  const addProduct = (product) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT, payload: product });
  };

  return (
    <InventoryContext.Provider value={{ state, addProduct }}>
      {children}
    </InventoryContext.Provider>
  );
}