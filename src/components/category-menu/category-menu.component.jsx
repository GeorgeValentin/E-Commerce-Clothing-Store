import { CategoriesContainer } from "./category-menu.styles.jsx";
import MenuItem from "../menu-item/menu-item.component";

import { categories } from "../../utils/categories/data.utils";

const CategoryMenu = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryMenu;
