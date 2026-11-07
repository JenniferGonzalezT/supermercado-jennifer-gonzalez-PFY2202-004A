export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  INCREASE_QTY: 'INCREASE_QTY',
  DECREASE_QTY: 'DECREASE_QTY',
};

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existe = state.find(item => item.id === action.payload.id);
      if (existe) {
        return state.map(item => 
          item.id === action.payload.id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, cantidad: 1 }];
    }
    case CART_ACTIONS.INCREASE_QTY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    case CART_ACTIONS.DECREASE_QTY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ).filter(item => item.cantidad > 0);
    default:
      return state;
  }
}