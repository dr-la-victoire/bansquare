import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="hero">
      <Navbar />
      <div className="hero-content" id="home">
        <h1 className="poppins-bold hero-title">Bansquare Books</h1>
        <p>
          Your One-Stop Solution for Bookstore, Publishing, Printing, and
          Branding Services
        </p>
        <div className="cta-buttons">
          <a href="https://wa.me/2348035794656" className="btn primary-btn">
            Order a Book
          </a>
          <NavLink to="/explore-collection" className="btn secondary-btn">
            Browse Collection
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
