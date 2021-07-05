import "./scss/index.scss";

// import isEqual from "lodash/isEqual";
import * as React from "react";

import { Thumbnail } from "@components/molecules";

// import { TaxedMoney } from "../../@next/components/containers";
import { BasicProductFields } from "../../views/Product/types/BasicProductFields";
import Button from "../Button";

export interface Product extends BasicProductFields {
  category?: {
    id: string;
    name: string;
  };
  pricing: {
    priceRange: {
      start: {
        gross: {
          amount: number;
          currency: string;
        };
        net: {
          amount: number;
          currency: string;
        };
      };
    };
    priceRangeUndiscounted: {
      start: {
        gross: {
          amount: number;
          currency: string;
        };
        net: {
          amount: number;
          currency: string;
        };
      };
    };
  };
}

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { category } = product;
  const price = product.pricing.priceRange.start;
  // const priceUndiscounted = product.pricing.priceRangeUndiscounted.start;

  // const getProductPrice = () => {
  //   if (isEqual(price, priceUndiscounted)) {
  //     return <TaxedMoney taxedMoney={price} />;
  //   } else {
  //     return (
  //       <>
  //         <span className="product-list-item__undiscounted_price">
  //           <TaxedMoney taxedMoney={priceUndiscounted} />
  //         </span>
  //         &nbsp;&nbsp;&nbsp;&nbsp;
  //         <TaxedMoney taxedMoney={price} />
  //       </>
  //     );
  //   }
  // };
  return (
    <div className="product-list-item">
      <div className="product-list-item__image">
        <Thumbnail source={product} />
        <p className="product-list-item__image__category">{category.name}</p>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <div style={{ borderTop: "1px solid #f0f0f0", width: "70%" }} />
      </div>
      <div className="product-list-item__bottom">
        <h4 className="product-list-item__title">{product.name}</h4>
        <div className="product-list-item__split">
          <div className="product-list-item__split__left">
            {/* <Button className="border-btn">Add to cart</Button> */}
          </div>
          <div>
            <p className="product-list-item__currency">MUR</p>
            <p className="product-list-item__price">
              {price.gross.amount.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
