import { createSelector } from "reselect";

// -> select the reducer
// -> when memoized only this will run, which will only look for the cached data
// which happens in O(1)
const selectCategoryReducer = (state) => state.category;

// -> select the categoriesArray that lives inside the categoryReducer
// -> we create a memoized selector (=> for when we pass the
// same inputs into the selector we want to cache the outputs)
// -> only rerun the selector when the categoriesSlice that
// we get from selectCategoryReducer is different
// -> this is good as we do not want to rerun the logic for
// our selectors if the state data is the same
export const selectCategories = createSelector(
  [selectCategoryReducer],

  // -> categories is the output of "selectCategoryReducer"
  // -> if we have another selector in the array (1st arg),
  // its ouput could be chained after categories
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

// -> the selector should be used to transform
// the data from the base format into a specific
// shape
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((accumulator, category) => {
      // -> for each document get the title and the items collection
      const { title, items } = category;

      accumulator[title.toLowerCase()] = items;

      return accumulator;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
