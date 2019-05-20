import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';




// Import Actions
import { getProducts, fetchProducts } from '../ProductActions';

class CartList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			             limit:5,
			             search:'',
			             itemCount:''
			           };
		this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {

    this.props.dispatch(fetchProducts());
    console.log(this.props.product)
  }

    
  render(){
  	
    
    return ( 
        <div> 
          <h1 align="center">Cart</h1>
           
          {  
            this.props.product && this.props.product.length > 0 ? 
            filteredProduct.slice(0,this.state.limit).map((product_details, index) =>
             
                <ul key={index} className="ProductList" width="246px">
                   
                   <li><img className="image" src= {product_details.image} height="200px" width="200px"/></li>
                   <li>{product_details.name }</li>
                   <li><span>&#8377;</span>{product_details.price }</li>
                   <li>{product_details.description }</li>
                   <li><button className="add_cart" onClick={this.addcart}>Add to cart</button></li>
                </ul>
            ):'No products'
          }
           
            
       </div>
    );

    

  
  }
}

// Actions required to provide data for this component to render in sever side.
CartList.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
   
    product: state.products.data,
  };
}



export default connect(mapStateToProps)(CartList);