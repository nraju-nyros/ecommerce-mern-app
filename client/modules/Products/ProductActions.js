import callApi from '../../util/apiCaller';

export const GET_PRODUCTS =  'GET_PRODUCTS';
export const ADD_CART = 'ADD_CART';
export const GET_CART = 'GET_CART';
export const DELETE_CART = 'DELETE_CART';

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

export function addCart(cart) {
  return {
    type: ADD_CART,
    cart,
  };
}

export function addCartRequest(product_id) {
	    console.log("createCart")
	    console.log("product_id",product_id)
  return (dispatch) => {
    return callApi('createCart', 'post', {
        product_id: product_id
    
    }).then(res => dispatch(addCart(res.product_id)));

  };
}


export function getCart(cart) {
  return {
    type: GET_CART,
    cart,
  };
}

export function fetchCart(data) {
  return (dispatch) => {
    return callApi('getCart','post').then(res => {
      dispatch(getCart(res.data));
    });
  };
}


export function deleteCart(cart) {
  return {
    type: DELETE_CART,
    cart,
  };
}

export function deleteCartRequest(cart_id) {
	console.log("cart_id",cart_id)
  return (dispatch) => {
    return callApi(`deleteCart/${cart_id}`,'delete').then(() => dispatch(deleteCart(cart_id)));
  };
}







