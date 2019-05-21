import { GET_PRODUCTS,ADD_CART,GET_CART,DELETE_CART } from './CartActions';


  const initialState = {  data: [],cart:[],name: "siva"};

  const CartReducer = (state = initialState, action) => {
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

        default:
          return state;
      }
  };




export default CarttReducer;


