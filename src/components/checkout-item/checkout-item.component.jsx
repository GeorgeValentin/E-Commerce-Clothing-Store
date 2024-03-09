import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

import {
  CheckoutItemContainer,
  RemoveButton,
  NameContainer,
  ArrowContainer,
  ValueContainer,
  PriceContainer,
  QuantityContainer,
  ImageContainer,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const clearCartItemHandler = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={removeItemHandler}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={addItemHandler}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>

      {/* -> &#1005/ => specific HTML X symbol */}
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
