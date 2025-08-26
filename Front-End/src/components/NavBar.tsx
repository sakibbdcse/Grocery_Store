import { CiShop } from "react-icons/ci";
import { FaHome, FaInfoCircle, FaShoppingBasket } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import "./nav.css";
const NavBar = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand btn btn-primary text-white" href="/">
              <MdDashboardCustomize /> Grocery Store
            </a>
            <div className="custom-nav d-flex justify-content-center gap-3 flex-wrap p-2">
              <ul className="navbar-nav d-flex flex-row flex-wrap gap-3">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center px-3 py-2 rounded text-white hover-bg"
                    href="/"
                  >
                    <FaHome className="me-2" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center px-3 py-2 rounded text-white hover-bg"
                    href="/add-product"
                  >
                    <CiShop className="me-2" />
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center px-3 py-2 rounded text-white hover-bg"
                    href="/add-product"
                  >
                    <IoAddCircle className="me-2" />
                    Add
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center px-3 py-2 rounded text-white hover-bg"
                    href="/about"
                  >
                    <FaInfoCircle className="me-2" />
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="order">
              <a className="btn btn-primary" href="/orders">
                <FaShoppingBasket />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
