import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;