const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    // This is feels unessecary
    case "ADD_ITEM": {
      const { _id } = action.payload;
      return {
        ...state,
        [_id]: {
          ...action.payload,
        },
      };
    }

    // @ts-ignore
    case "CHANGE_ITEM": {
      const { _id, inCart } = action.payload;
      if (inCart > 0) {
        return {
          ...state,
          [_id]: action.payload,
        };
      }
      // We do a fallthrough to delete item if Itemcount is less than 0
      /* falls through */
    }

    case "DELETE_ITEM": {
      const { _id } = action.payload;
      const newState = { ...state };
      delete newState[_id];
      return newState;
    }

    case "CLEAR_CART": {
      return {};
    }

    default:
      return state;
  }
};

export default CartReducer;
