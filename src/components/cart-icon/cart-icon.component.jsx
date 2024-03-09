import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import {
  ItemCountContainer,
  CartIconContainer,
  ShoppingIconElem,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconElem className="shopping-icon" />
      <ItemCountContainer className="item-count">
        {cartCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
