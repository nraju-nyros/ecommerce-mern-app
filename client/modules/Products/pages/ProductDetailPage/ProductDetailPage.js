import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';


// Import Actions
import { fetchProducts } from '../../ProductActions';

import{getProducts} from '../../ProductReducer';

      export function ProductDetailPage(props) {
        return (
          <div>
            
            <div>
              <h3>{props.products.name}</h3>
              <p> {props.products.price}</p>
              <p>{props.products.description}</p>
               <p>{props.products.image}</p>

            </div>
          </div>
        );
      }

// Actions required to provide data for this component to render in server side.
      ProductDetailPage.need = [params => {
        return fetchProducts(params.cuid);
      }];

      // Retrieve data from store as props
      function mapStateToProps(state, props) {
        return {
          products: fetchProducts(state, props.params.cuid),
        };
      }

      ProductDetailPage.propTypes = {
        products: PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          
        }).isRequired,
      };

export default connect(mapStateToProps)(ProductDetailPage);
