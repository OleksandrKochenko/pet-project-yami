import css from '../../styles/home.module.css';

export const Hero = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.wrapper_leaf}>
        <div className={css.container}>

          <h1 className={css.title}>
            <span className={css.title_start}>So</span>Yummy
          </h1>

      <p  className={css.text}>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </p>
      <form action="" onSubmit={() => {}}>
        <input type="text" placeholder="beef" />
        <button type="button">Search</button>
      </form>
      <aside>
        Delicious and healthy way to enjoy a variety of fresh ingredients in one
        satisfying meal!!
        <a href="/">See recipes</a>
      </aside></div></div>
    </section>
  );
};
