import { ADD_POST, ADD_POSTS, DELETE_POST ,PRODUCTS } from './PostActions';

// Initial State
const initialState = { data: [] };


const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };


    case PRODUCTS :
      return {
        data: [action.product, ...state.name],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

export const getProducts = state => state.product.data;
    
// Export Reducer
export default PostReducer;
