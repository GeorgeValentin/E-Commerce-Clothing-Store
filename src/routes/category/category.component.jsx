import { useState, useEffect, Fragment } from "react";

// -> this HOOK allows use to get a value from the URL's parameters
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import ProductCard from "../../components/product-card/products-card.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();

  // -> this only re-renders if the return of the selector function
  // you pass to it is different
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  // -> we do this as we want the products to be rerendered only if the category or categoriesMap changes
  // i.e., if we refresh the page, we do not refresh
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {/* -> run map only when we have something the the products arr */}
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
