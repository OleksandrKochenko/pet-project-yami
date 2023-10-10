import { RecipesListItem } from 'components/reusableComponents/RecipesListItem';
import css from '../../styles/home.module.css'



export const RecipesListSection = ({ data }) => {
  return (
    <section>
      <h3 className={css.hero_title}>{data.title}</h3>
      <div style={{ display: 'flex' }}>
        {data.content.map((el, idx) => (
          <RecipesListItem key={idx} data={el} />
        ))}
      </div>
      <a href="/">
        <button>See all</button>
      </a>
    </section>
  );
};
