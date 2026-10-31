import { useReducer, useEffect } from 'react';
import { InventoryContext } from './InventoryContext';

// Estado inicial: Lista vacía
const initialState = {
  products: []
};

// Definir las acciones
const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS'
};

// Reducer: Decide cómo cambia el estado según la acción
function inventoryReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { id: crypto.randomUUID(), ...action.payload }]
      };
    case ACTIONS.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload // Cargar los productos que vienen del JSON
      };
    default:
      return state;
  }
}

// Componente Proveedor que envolverá la aplicación
export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  // useEffect para simular la llamada a la API al cargar la aplicación
  useEffect(() => {
    fetch('data/productos.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.LOAD_PRODUCTS, payload: data });
      })
      .catch((error) => console.error("Error al cargar el inventario:", error));
  }, []);

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