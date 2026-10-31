// Definir las acciones
export const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  SET_ERROR: 'SET_ERROR'
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
        products: [...state.products, { id: crypto.randomUUID(), isNew: true, ...action.payload }]
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
    default:
      return state;
  }
}