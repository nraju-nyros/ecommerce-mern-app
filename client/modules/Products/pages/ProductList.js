import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Import Actions
import { getProducts, fetchProducts } from '../ProductActions';
import {getCart,addCart,addCartRequest } from '../../Cart/CartActions';


class ProductList extends React.Component {
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


  render(){
      let filteredProduct = this.state.product.filter((product)=>{
            return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      });

    return ( 
      <div> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
          <h1 align="center">Products</h1>
          <div className="input_search" ><input className="input_search1" placeholder="search" value={this.state.search} onChange = {this.updateSearch.bind(this)} type="text"/>
          </div>
                     
          <div id="cart">
            <Link to={"/cartlist" }> <span className="glyphicon glyphicon-shopping-cart" Style="font-size:48px;color:green"></span></Link>
            <i Style="font-size:30px">{ this.state.clicks } </i>
          </div><br/>
         
          {  
            this.state.product && this.state.product.length > 0 ? 
            filteredProduct.slice(0,this.state.limit).map((product, index) =>
              <ul key={index} className="ProductList" width="246px">
                <li><Link to={"/product_details/" + product._id}><img className="image" src= {product.image} height="200px" width="200px"/></Link></li>
                <li><Link to={"/product_details/" + product._id}>{product.name }</Link></li>
                <li><span>&#8377;</span>{product.price }</li>
                <li>{product.description }</li>
                <li><button className="add_cart" onClick={() => this.addCart(product._id)}>Add to cart</button></li>
              </ul>
            ):'No products'
          }
           
          <div align="right"className="">
            {this.state.limit <= this.state.product.length ?  <button  className="load" href="#" onClick={this.onLoadMore}>Load more</button> :<p>No products Available</p> }
          </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ProductList.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
   
    product: state.products.data,
    
  };
}



export default connect(mapStateToProps)(ProductList);