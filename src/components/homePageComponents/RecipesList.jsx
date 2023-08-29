import { RecipesListSection } from './RecipesListSection';

// code below should be replaced by data from backend ---- !
import { temporaryData } from 'temporaryData/temporaryData';
const { recipes } = temporaryData;
const beefRecipes = {
  title: 'Beef',
  content: [recipes[4], recipes[6], recipes[26], recipes[28]],
};
const seafoodRecipes = {
  title: 'Seafood',
  content: [recipes[0], recipes[10], recipes[11], recipes[46]],
};
const chickenRecipes = {
  title: 'Chicken',
  content: [recipes[3], recipes[7], recipes[12], recipes[15]],
};
const dessertRecipes = {
  title: 'Dessert',
  content: [recipes[5], recipes[9], recipes[14], recipes[17]],
};
const homePageData = [
  beefRecipes,
  seafoodRecipes,
  chickenRecipes,
  dessertRecipes,
];
// code above should be replaced by data from backend ---- !

export const RecipesList = () => {
  return (
    <div>
      {homePageData.map((el, idx) => (
        <RecipesListSection key={idx} data={el} />
      ))}
    </div>
  );
};
