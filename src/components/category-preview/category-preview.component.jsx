import ProductCard from "../product-card/products-card.component";

import {
  TitleLink,
  CategoryPreviewContainer,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>

      <Preview>
        {
          // -> "_" = the first callback param is the product
          // and since we don't need it we ignore it
          // -> keep the product if the index is < 4 (=> get only the first 4 products)
          products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
