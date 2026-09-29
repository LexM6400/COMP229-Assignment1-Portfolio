import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="navigation">
        <NavLink
          to="/"
          className="logo-link"
          aria-label="Go to the Home page"
        >
          <img
            src="/images/Me.png"
            alt="Alexis Morales custom logo"
            className="custom-logo"
          />
        </NavLink>

        <div className="navigation-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </div>
      </nav>
    </header>
  );
}