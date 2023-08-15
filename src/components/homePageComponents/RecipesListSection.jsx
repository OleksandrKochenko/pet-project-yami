import { RecipesListItem } from 'components/reusableComponents/RecipesListItem';

export const RecipesListSection = ({ data }) => {
  return (
    <section>
      <h3>{data.title}</h3>
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
