import { Hero } from 'components/homePageComponents/Hero';
import { RecipesList } from 'components/homePageComponents/RecipesList';

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Hero />
      <RecipesList />
    </div>
  );
};

export default Home;
