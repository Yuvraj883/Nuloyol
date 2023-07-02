import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <span className="title">
          <Link to="/"> NULOYAL</Link>
        </span>
        <div>
          <ul>
            <li>
              {" "}
              <Link to="/platform">Platform</Link>{" "}
            </li>
            <li>
              <Link to="#">Customers</Link>
            </li>
            <li>
              <Link to="#">Learning Center</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="#">Pricing</Link>
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
