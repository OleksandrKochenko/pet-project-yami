export const RecipesListItem = ({ data }) => {
  return (
    <div>
      <img src={data.thumb} alt={data.title} width="120px" />
      <button>{data.title}</button>
    </div>
  );
};
