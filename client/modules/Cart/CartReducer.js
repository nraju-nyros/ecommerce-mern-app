import { ADD_CART,GET_CART,DELETE_CART } from './CartActions';


  const initialState = {  data: [],cart:[],name: "siva"};

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

        default:
          return state;
      }
  };




export default CarttReducer;


