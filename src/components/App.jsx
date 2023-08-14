import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('../pages/home'));
const Categories = lazy(() => import('../pages/categories'));
const AddRecipe = lazy(() => import('../pages/addRecipe'));
const MyRecipes = lazy(() => import('../pages/myRecipes'));
const Favorites = lazy(() => import('../pages/favorites'));
const ShopingList = lazy(() => import('../pages/shopingList'));
const Search = lazy(() => import('../pages/search'));
const Recipe = lazy(() => import('../pages/recipe'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="add-recipe" element={<AddRecipe />} />
        <Route path="my-recipes" element={<MyRecipes />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="shoping-list" element={<ShopingList />} />
        <Route path="search" element={<Search />} />
        <Route path="recipes/:recipeId" element={<Recipe />} />
      </Route>
    </Routes>
  );
};
