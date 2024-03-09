import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../store/cart/cart.reducer";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // -> this hook will give us a function we can use
  // to navigate to a route
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const emptyCartHandler = () => {
    dispatch(emptyCart([]));
  };

  return (
    <CartDropdownContainer>
      {cartItems.length === 0 ? (
        <EmptyMessage>Your cart is empty!</EmptyMessage>
      ) : (
        <Fragment>
          <CartItemsContainer>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </CartItemsContainer>

          <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
          <Button onClick={emptyCartHandler}>EMPTY CART</Button>
        </Fragment>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
