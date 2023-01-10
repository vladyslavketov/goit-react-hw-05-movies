import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from './Layout.module.css'

export const Layout = () => {
  return (
  <>
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.navLink}>Home</NavLink>
        <NavLink to="/movies" className={css.navLink}>Movies</NavLink>
      </nav>
    </header>
      
    <Suspense fallback={<div>Loading...</div>}>
      <main className={css.main}>
        <Outlet />
      </main>
    </Suspense>
    
  </>
  );
};