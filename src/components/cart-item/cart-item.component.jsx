import { memo } from "react";

import {
  CartItemContainer,
  NameContainer,
  ItemDetails,
} from "./cart-item.styles.jsx";

const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
