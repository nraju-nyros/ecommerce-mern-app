import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import ProductList from '../../components/ProductList';

// Import Actions
import { getProducts} from '../../ProductActions';

// Import Selectors

import { getproducts } from '../../ProductReducer';

class ProductListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  

  
  render() {
    return (
      <div>
        <h1>products</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ProductListPage.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    
    posts: getProducts(state),
  };
}

ProductListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  
};

ProductListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(ProductListPage);