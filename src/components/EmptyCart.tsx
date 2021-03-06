import * as React from "react";
import { Link } from "react-router-dom";

import { baseUrl } from "../app/routes";
import Button from "./Button";

const EmptyCart: React.FC<{}> = () => (
  <div className="cart-page__empty">
    <h4>Your cart is empty</h4>
    <p>
      You haven’t added anything to your cart. We’re sure you’ll find something
      in our store
    </p>
    <div className="cart-page__empty__action">
      <Link to={baseUrl}>
        <Button secondary>Continue Shopping</Button>
      </Link>
    </div>
  </div>
);

export default EmptyCart;
