import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Rutuja Nandkhile</NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">Services</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Projects">Projects</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
