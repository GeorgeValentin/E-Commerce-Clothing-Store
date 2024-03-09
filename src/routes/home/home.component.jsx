import { Outlet } from "react-router-dom";

import CategoryMenu from "../../components/category-menu/category-menu.component";

const Home = () => {
  return (
    <div>
      {/* 
        -> wherever this <Outlet /> is added to, that
        is where we render the inner route child component
        of the Home comp page 
      */}
      <Outlet />
      <CategoryMenu />
    </div>
  );
};

export default Home;
