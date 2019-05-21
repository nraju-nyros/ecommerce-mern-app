import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Import Actions
import { getProducts, fetchProducts,getCart,addCart,addCartRequest } from '../ProductActions';


// Import Components
class Product_details extends React.Component {
  constructor(props) {
    super(props);
     
      this.state = {
        data:[]
      }

      console.log("this.state.product",this.state.product)
  }
         

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.product){
          this.setState({product:nextProps.product});
        }
    }

      
  
  render() { 
            (console.log("this.props.id",this.props.params.id))
    return ( 
        <div>
            <h1 align="center">Product Details</h1> <br/><br/>
          <div className="Products_container">
            { (this.state.data.filter(mobile=> mobile.id===this.props.params.id).map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>))
            }
          </div>
        </div>
    );


  }
    
  
}

Product_details.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
   
    product: state.products.data,
    
  };
}

         
class Content extends React.Component {
  render() {
      return (
        <div >  
          <img className="image" src= {this.props.componentData.image} height="400px" width="400px"/>
          <p> {this.props.componentData.name}</p>
          <p> {this.props.componentData.description}</p>
          <p> &#8377;{this.props.componentData.price}</p> 
          <br/><a href='http://10.90.90.110:8000/productlist'>Back to home page</a> 
        </div>
      );
  }
}

export default (Product_details);




