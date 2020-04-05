import React, { useState } from "react";
import productData from "../data/products.json";
import RadioButtonGroup from "../components/RadioButtonGroup";
import ProductGrid from "../components/ProductGrid";

const sortingData = [
  { value: "cost", label: "Cheapest" },
  { value: "lead_time", label: "Fastest" }
];

function Products() {
  const [orderBy, setOrderBy] = useState("cost");
  const sortProducts = productItems => {
    return productItems.sort((a, b) => {
      return a[orderBy] - b[orderBy];
    });
  };
  return (
    <div className="container">
      <div className="sort-label">Sort by</div>
      <RadioButtonGroup
        items={sortingData}
        value={orderBy}
        onClick={val => setOrderBy(val)}
      />
      <ProductGrid products={sortProducts(productData.items)} />
    </div>
  );
}

export default Products;
