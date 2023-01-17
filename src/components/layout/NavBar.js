import "../../Styles/ComponentsCss/NavBar.scss";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {

        const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
      }
    
    return ( 
        <div>
             <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>WikiPokedex</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <h2>☰</h2>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/blog">Blog</a>
            </li>
            <li>
              <a to="/projects">Projects</a>
            </li>
            <li>
              <a to="/about">About</a>
            </li>
            <li>
              <a to="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
     );
}
 
export default NavBar;
