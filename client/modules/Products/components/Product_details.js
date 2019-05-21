


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
             data:[
             {
              "id":"5cdd565cab230b12d0e7ecb9",
              "name":"xioami_note7",
              "description" : "64Gb ROM & 4gb Ram",
              "price" : 9000,
              "image" : '../assets/images/mob1.jpg',
              "category" : "mobiles"
              },
             { 
              "id":"5cdd568cab230b12d0e7ecbb",
              "name":"vivo",
              "description" : "32Gb ROM & 3gb Ram",
               "price" : 7000,
              "image" : '../assets/images/mob2.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"5cdd56e0ab230b12d0e7ecbd",
              "name":"oppo",
              "description" : "4000mah battery",
               "price" :12000,
              "image" : '../assets/images/mob3.jpg',
              "category" : "mobiles"
             }, 
             { 
              "id":"5cdd5722ab230b12d0e7ecbf",
              "name":"iphone",
              "description" : "128gb Rom & 6gb Ram",
               "price" : 4000,
              "image" : '../assets/images/mob4.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"5cdd5744ab230b12d0e7ecc1",
              "name":"lenovo",
              "description" : "32gb Rom & 3gb RAM",
               "price" : 10000,
              "image" : '../assets/images/mob5.jpg',
              "category" : "mobiles"
             },
             {
              "id":"5cdd5766ab230b12d0e7ecc3",
              "name":"xiami_note5",
              "description" : "snapdragon 628 processor",
               "price" : 11000,
              "image" : '../assets/images/mob6.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"5cdd57afab230b12d0e7ecc5",
              "name":"realme",
              "description" : "5000mah super battery",
               "price" : 12000,
              "image" : '../assets/images/mob7.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"5cdd57e0ab230b12d0e7ecc7",
              "name":"One+",
              "description" : "256gb memory",
               "price" : 13000,
              "image" : '../assets/images/mob8.jpg',
              "category" : "mobiles"
             },
             
             { 
              "id":"5cdd5805ab230b12d0e7ecc9",
              "name":"Lg",
              "description" : "5Gb Ram mobile",
               "price" : "14000",
              "image" : '../assets/images/mob9.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"5cdd5844ab230b12d0e7eccd",
              "name":"Samsung",
              "description" : "HDD Display",
              "price" :15000,
              "image" : '../assets/images/mob10.png',
              "category" : "mobiles"
             }
            ]
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




