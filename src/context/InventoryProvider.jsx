import { useReducer } from 'react';
import { InventoryContext } from './InventoryContext';

// Definir las acciones permitidas
const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
};

// Estado inicial: Lista con un par de productos de prueba
const initialState = {
  products: [
    { id: 1, nombre: 'Arroz Grado 1', marca: 'Tucapel', tipo: 'Abarrotes' },
    { id: 2, nombre: 'Leche Descremada', marca: 'Soprole', tipo: 'Lácteos' }
  ]
};

// Reducer: Decide cómo cambia el estado según la acción
function inventoryReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { id: crypto.randomUUID(), ...action.payload }]
      };
    default:
      return state;
  }
}

// Componente Proveedor que envolverá la aplicación
export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  // Función de ayuda para despachar la acción más fácilmente
  const addProduct = (product) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT, payload: product });
  };

  return (
    <InventoryContext.Provider value={{ products: state.products, addProduct }}>
      {children}
    </InventoryContext.Provider>
  );
}