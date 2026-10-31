import { useReducer, useEffect } from 'react';
import { InventoryContext } from './InventoryContext';

// Estado inicial: Lista vacía e indicadores de carga y error
const initialState = {
  products: [],
  loading: true,
  error: null
};

// Definir las acciones
const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  SET_ERROR: 'SET_ERROR'
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
        products: action.payload, // Cargar los productos que vienen del JSON
        loading: false,           // Apagar el estado de carga
        error: null
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload // Guardar el mensaje de error
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