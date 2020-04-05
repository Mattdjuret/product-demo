import React from "react";
import PropTypes from "prop-types";

import ProductItem from "./ProductItem";

function ProductGrid(props) {
  const { products } = props;
  const maxDays = Math.max.apply(Math, products.map(function(o) { return o.lead_time; }))
  return (
    <div className="grid-row">
      {products.map(item => (
        <ProductItem key={item.product} {...item} maxDays={maxDays} />
      ))}
    </div>
  );
}
ProductGrid.propTypes = {
  products: PropTypes.array
};

export default ProductGrid;
