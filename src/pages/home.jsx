import { Hero } from 'components/homePageComponents/Hero';
import { RecipesList } from 'components/homePageComponents/RecipesList';
import css from '../styles/home.module.css'

const Home = () => {
  return (
    <div className={css.home}
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
