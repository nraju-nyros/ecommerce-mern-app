import callApi from '../../util/apiCaller';

export const GET_PRODUCTS =  'GET_PRODUCTS';

export function getProducts(product) {
  return {
    type: GET_PRODUCTS,
    product,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    return callApi('getProducts','post').then(res => {
      dispatch(getProducts(res.data));
    });
  };
}




