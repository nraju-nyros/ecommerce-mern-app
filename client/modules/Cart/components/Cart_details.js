import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Import Actions
import { getProducts, fetchProducts } from '../../Products/ProductActions';
import {getCart,addCart,addCartRequest } from '../../Cart/CartActions';

class Cart_details extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                   limit:5,
                   search:'',
                   itemCount:'',
                   product:[],
                   cart:[],
                   post:'',
                   clicks:0,
                   show:true
                   
                 };
    }

    componentDidMount() {
      this.props.dispatch(fetchProducts());
      console.log(this.props.product)
    }

    componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.product){
          this.setState({product:nextProps.product});
      }
    }

    render() { 
            console.log("this.props.id",this.props.params.id)
            console.log("this.props.product",this.state.product)
      return ( 
          <div>
              <div class="header">
                  <a href="#default" class="logo" >Product Details</a>
              </div><br/> <br/>
            <div className="Products_container">
              {(this.state.product.filter(mobile=> mobile._id===this.props.params.id).map((product, i) => <ul align="center" key = {i} >  
                  
                  <img className="image" src= {product.image} height="400px" width="400px"/>
                  <h2> {product.name}</h2>
                  <p> {product.description}</p>
                  <p> &#8377;{product.price}</p> 
                  <br/><a href='http://10.90.90.110:8000/cartlist'>Back to Cart</a> 
                </ul>

              ))}
            </div>
          </div>
      );
    }
    
}

Cart_details.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
   
    product: state.products.data,
    
  };
}

export default connect(mapStateToProps)(Cart_details);




