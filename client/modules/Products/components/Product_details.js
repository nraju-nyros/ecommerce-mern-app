import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Import Actions
import { getProducts, fetchProducts } from '../ProductActions';
import {getCart,addCart,addCartRequest } from '../../Cart/CartActions';


class Product_details extends React.Component {
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
    this.onLoadMore = this.onLoadMore.bind(this);
    this.addCart = this.addCart.bind(this);
   
    console.log('post',this.state.post);
  }

    componentDidMount() {
      this.props.dispatch(fetchProducts());
      console.log(this.props.product)
    }

    onLoadMore = () =>{
      this.setState({
        limit:this.state.limit +5
      });
    }
    
    componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.product){
          this.setState({product:nextProps.product});
      }
    }

    onchange = e => {
      this.setState({ search: e.target.value });
    };

    updateSearch(event){
      this.setState({search:event.target.value.substr(0,20)});
    }

    addCart(product_id){
      this.props.dispatch(addCartRequest(product_id));
      this.setState({ clicks: this.state.clicks + 1 });
      console.log("product_id",product_id);
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
              {(this.state.product.filter(mobile=> mobile._id===this.props.params.id).map((product, i) =>
                <ul align="center" key = {i} >  
                  <img className="image" src= {product.image} height="400px" width="400px"/>
                  <h2> {product.name}</h2>
                  <p> {product.description}</p>
                  <p> &#8377;{product.price}</p> 
                  <br/><a href='http://10.90.90.110:8000'>Back to home page</a> 
                </ul>

              ))}
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

         
export default connect(mapStateToProps)(Product_details);




