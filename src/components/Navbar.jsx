import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <span className="title">
          <NavLink to="/"> NULOYAL</NavLink>
        </span>
        <div>
          <ul>
            <li>
              {" "}
              <NavLink to="/platform">Platform</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/customers">Customers</NavLink>
            </li>
            <li>
              <NavLink to="/learning-center">Learning Center</NavLink>
            </li>
            <li>
              <NavLink  to="/company">Company</NavLink>
            </li>
            <li>
              <NavLink  to="/pricing">Pricing</NavLink>
            </li>
          </ul>
        </div>
        <button className="request-demo">Request Demo</button>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
