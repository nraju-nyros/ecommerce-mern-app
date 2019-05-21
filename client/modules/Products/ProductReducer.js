import { GET_PRODUCTS } from './ProductActions';


  const initialState = {  data: [],cart:[]};

  const ProductReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_PRODUCTS : 
          return {
            ...state,
            data: action.product,
            name:action.post
          };

        default:
          return state;
      }
  };




export default ProductReducer;


