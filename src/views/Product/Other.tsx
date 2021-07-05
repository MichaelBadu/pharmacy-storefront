import * as React from "react";

import { ProductList } from "@components/organisms";

import { ProductDetails_product_category_products_edges } from "./types/ProductDetails";

const OtherProducts: React.FC<{
  products: ProductDetails_product_category_products_edges[];
}> = ({ products }) => (
  <div className="product-page__other-products">
    <div className="container">
      <h4 className="product-page__other-products__title">Related Products</h4>
      <div>
        <ProductList products={products.map(({ node }) => node)} />
      </div>
    </div>
  </div>
);

export default OtherProducts;
