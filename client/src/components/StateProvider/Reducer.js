export const initialState = {
  cart: [],
  user: null,
};
export const getCartTotal = (cart) =>
cart.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_CART":
      //logic for adding to cart
      return { ...state, cart: [...state.cart, action.item],
     };

     case "EMPTY_CART":
       return {
         ...state,
         cart: []
       };

    case "REMOVE_FROM_CART":
      //logic for removing

      // cloned new cart
     let newCart = [...state.cart];
     const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

     if (index >= 0) {
       // item exists in cart,remove it
      newCart.splice(index, 1);

     } else {
       console.warn(
         `Cant remove product (id: ${action.id}) as its not in cart `
       );
     }

      return { 
        ...state,
         cart: newCart,
       };
    default:
      return state;
  }
};

export default reducer;
