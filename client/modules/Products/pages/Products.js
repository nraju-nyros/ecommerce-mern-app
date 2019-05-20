import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';





// Import Components
class Products extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data:[
             {
              "id":"1",
              "name":"xioami_note7",
              "description" : "64Gb ROM & 4gb Ram",
              "price" : 9000,
              "image" : '../assets/images/mob1.jpg',
              "category" : "mobiles"
             }, 
             { 
              "id":"2",
              "name":"vivo",
              "description" : "32Gb ROM & 3gb Ram",
               "price" : 7000,
              "image" : '../assets/images/mob2.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"3",
              "name":"oppo",
              "description" : "4000mah battery",
               "price" :12000,
              "image" : '../assets/images/mob3.jpg',
              "category" : "mobiles"
             }, 
             { 
              "id":"4",
              "name":"iphone",
              "description" : "128gb Rom & 6gb Ram",
               "price" : 4000,
              "image" : '../assets/images/mob4.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"5",
              "name":"lenovo",
              "description" : "32gb Rom & 3gb RAM",
               "price" : 10000,
              "image" : '../assets/images/mob5.jpg',
              "category" : "mobiles"
             },
             {
              "id":"6",
              "name":"xiami_note5",
              "description" : "snapdragon 628 processor",
               "price" : 11000,
              "image" : '../assets/images/mob6.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"7",
              "name":"realme",
              "description" : "5000mah super battery",
               "price" : 12000,
              "image" : '../assets/images/mob7.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"8",
              "name":"One+",
              "description" : "256gb memory",
               "price" : 13000,
              "image" : '../assets/images/mob8.jpg',
              "category" : "mobiles"
             },
             
             { 
              "id":"9",
              "name":"Lg",
              "description" : "5Gb Ram mobile",
               "price" : "14000",
              "image" : '../assets/images/mob9.jpg',
              "category" : "mobiles"
             },
             { 
              "id":"10",
              "name":"Samsung",
              "description" : "HDD Display",
              "price" :15000,
              "image" : '../assets/images/mob10.png',
              "category" : "mobiles"
             }
            ]
    }
  }
    render() {
      return (
         <div><h1 align="center">Products</h1> <br/><br/>
            <div className="Products_container">
               {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
    }
}

class Content extends React.Component {
  render() {

      return (
        
         <ul className="Products">
            <li><img className="image" src= {this.props.componentData.image} height="200px" width="200px"/></li>
            <li><Link to={"/product_details/" + this.props.componentData.id}>{this.props.componentData.name}</Link></li>
            <li>{this.props.componentData.description}</li>
            <li><span>&#8377;</span> {this.props.componentData.price}</li><br/>
         </ul> 
        
      );
  }
}



export default Products;