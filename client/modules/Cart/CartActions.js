import callApi from '../../util/apiCaller';

export const ADD_CART = 'ADD_CART';
export const GET_CART = 'GET_CART';
export const DELETE_CART = 'DELETE_CART';



export function addCart(cart) {
   console.log("addCart",addCart)
  return {
    type: ADD_CART,
    cart,
  };
}

export function addCartRequest(product_id) {
	    console.log("product_id",product_id)
  return (dispatch) => {
    return callApi('createCart', 'post', {
        product_id: product_id
    
    }).then(res => dispatch(addCart(res.product_id)));

  };
}


export function getCart(cart) {
   console.log("getCart",getCart)
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
  console.log("deleteCart",deleteCart)
  return {
    type: DELETE_CART,
    cart,
  };
}

export function deleteCartRequest(cart_id){
	console.log("cart_id",cart_id)
  return (dispatch) => {
    return callApi(`deleteCart/${cart_id}`,'delete').then(() => dispatch(deleteCart(cart_id)));
  };
}







