import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
//import styles from './PostListItem.css';

function ProductListItem(props) {
  return (
    <div className={styles['single-post']}><h1>products</h1>
      <h3 className={styles['post-title']}>
        <Link to={`/productlist`}>
          {props.products.name}
        </Link>
      </h3>
      <p>{props.products.description}</p>
      <p>{props.products.price}</p>
     
      <hr className={styles.divider} />
    </div>
  );
}

ProductListItem.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    
  }).isRequired
 
};

export default ProductListItem;
