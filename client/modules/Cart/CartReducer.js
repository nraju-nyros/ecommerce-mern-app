import { ADD_CART,GET_CART,DELETE_CART } from './CartActions';


  const initialState = {  data: [],cart:[]};

  const CartReducer = (state = initialState, action) => {
      switch (action.type) {
        case ADD_CART :
          return {
            ...state,
             data: action.cart,
          };

        case GET_CART : 
          return {
            ...state,
            cart: action.cart,
          };  

        case DELETE_CART :
          return {
            data: state.cart.filter(post => post.cart_id !== action.cart_id),
          };

        default:
          return state;
      }
  };




export default CartReducer;


