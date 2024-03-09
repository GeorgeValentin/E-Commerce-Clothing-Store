import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { setCategories } from "../../store/categories/category.reducer";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      {/* -> we use index={true} since we want this to be rendered when we navigate to <Shop /> */}
      <Route index={true} element={<CategoriesPreview />} />

      {/* -> we navigate to the route by passing a category parameter */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
