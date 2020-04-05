import React from "react";
import PropTypes from "prop-types";

import ProgressBar from "./ProgressBar";

function ProductItem(props) {
  const { cost, currency, lead_time, product, maxDays } = props;
  const image = product.split("_")[0] + ".svg";
  return (
    <div className="grid-item">
      <div className="product-item">
        <div className="product-img">
          <img src={`${process.env.PUBLIC_URL}/img/${image}`} alt="" />
        </div>
        <div className="product-details">
          <div className="product-title">{product.replace("_", " ")}</div>
          <div className="product-cost">{`${cost.toFixed(0)} ${currency}`}</div>
          <div className="product-leadtime">
            {`${lead_time} days`}{" "}
            <ProgressBar percentage={lead_time / maxDays*100} />
          </div>
        </div>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  cost: PropTypes.number,
  currency: PropTypes.string,
  lead_time: PropTypes.number,
  product: PropTypes.string,
  maxDays: PropTypes.number
};

export default ProductItem;
