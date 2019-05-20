import { GET_PRODUCTS,ADD_CART,GET_CART,DELETE_CART } from './ProductActions';


  const initialState = {  data: [],cart:[],name: "siva"};

  const ProductReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_PRODUCTS : 
          return {
            ...state,
            data: action.product,
            name:action.post
          };

          

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




export default ProductReducer;


