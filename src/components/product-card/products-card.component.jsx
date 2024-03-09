import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  ProductCardComponent,
  FooterComponent,
  NameContainer,
  PriceContainer,
} from "./products-card.styles.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardComponent>
      <img src={imageUrl} alt={`${name}`} />

      <FooterComponent>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </FooterComponent>

      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardComponent>
  );
};

export default ProductCard;
