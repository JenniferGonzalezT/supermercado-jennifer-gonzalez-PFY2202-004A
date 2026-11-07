// Definir las acciones
export const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  SET_ERROR: 'SET_ERROR',
  DECREASE_STOCK: 'DECREASE_STOCK',
  INCREASE_STOCK: 'INCREASE_STOCK'
};

// Estado inicial: Lista vacía e indicadores de carga y error
export const initialState = {
  products: [],
  loading: true,
  error: null
};

// Reducer: Decide cómo cambia el estado según la acción
export function inventoryReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case ACTIONS.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ACTIONS.DECREASE_STOCK:
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload.id 
          ? { ...product, stock: Math.max(0, product.stock - action.payload.cantidad) } 
          : product
        )
      };
    case ACTIONS.INCREASE_STOCK:
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload.id 
            ? { ...product, stock: product.stock + action.payload.cantidad } 
            : product
        )
      };
    default:
      return state;
  }
}