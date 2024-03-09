import { useNavigate } from "react-router-dom";

import {
  Body,
  BackgroundImage,
  MenuItemContainer,
} from "./menu-item.styles.jsx";

const MenuItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  // -> this HOOK gives us a function that we can use to navigate
  // to a specific route, passed as argument
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <MenuItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </MenuItemContainer>
  );
};

export default MenuItem;
