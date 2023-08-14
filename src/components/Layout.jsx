import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/add-recipe">Add recipes</NavLink>
          <NavLink to="/my-recipes">My recipes</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/shoping-list">Soping list</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer
        style={{
          height: '120px',
          width: '100%',
          backgroundColor: 'darkgray',
          position: 'fixed',
          bottom: 0,
        }}
      >
        <NavLink to="/">Home</NavLink>
        <span>So Yummy</span>
        <nav>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/add-recipe">Add recipes</NavLink>
          <NavLink to="/my-recipes">My recipes</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/shoping-list">Soping list</NavLink>
        </nav>
      </footer>
    </>
  );
};

export default Layout;
