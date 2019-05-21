import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import{getCart,fetchCart,deleteCart,deleteCartRequest} from '../CartActions';



class CartList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                   cart:[],
                   data:[],
                   clicks:'',
                   
                 };
  }
  
  componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.cart)
        {
          this.setState({cart:nextProps.cart});
        }

  }

  componentDidMount() {
    this.props.dispatch(fetchCart());
    
  }

  deleteCart(cart_id){
       console.log("cart_item_id",cart_id);
      if (confirm('Do you want to delete this product')){ 
        this.props.dispatch(deleteCartRequest(cart_id));
      
      }  };
      componentDidMount() {
    this.props.dispatch(fetchCart());
    }

 
    
  render(){ 
    
    var data = this.state.cart
      return <div> 
    
        { 
          this.state.cart && this.state.cart.length > 0 ?
          data.map((item, index) => {
            return ( <div key={index} className="ProductList">
                
                { item.product_id.map((cart_item, i) => <div >
                  <ul  key={i} className="ProductList" width="246px">
                   <li ><img className="image" src= {cart_item.image} height="200px" width="200px"/></li>
                <li>{cart_item.name}</li>
                <li>{cart_item.description}</li>
                <li><span>&#8377;</span>{cart_item.price }</li>
                 <li><button className="btn1" onClick={()=> this.deleteCart(item._id)} >remove from cart</button></li>
                </ul>
                </div>)}
              </div>
            )
          }):'No Products'
        }
          <div align="center"><a href="http://10.90.90.110:8000">Back to Home</a></div>
    </div>
  }
}

// Actions required to provide data for this component to render in sever side.
CartList.need = [() => { return fetchCart(); }];

// // Retrieve data from store as props
function mapStateToProps(state) {
  return {
   
    cart: state.cart.cart,
  };
}



export default connect(mapStateToProps)(CartList);