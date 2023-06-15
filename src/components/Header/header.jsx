import { NavLink } from "react-router-dom";

export function Header() {
  const title = "Louis.";
  return (
    <nav>
      <NavLink activeclassname="active" className="logo-nav-link" to="/">
        <h1 className="logo">{title}</h1>
      </NavLink>
      <div className="nav-links">
        <NavLink activeclassname="active" className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink activeclassname="active" className="nav-link" to="/about">
          About me
        </NavLink>
        <NavLink activeclassname="active" className="nav-link" to="/portfolio">
          PortFolio
        </NavLink>
      </div>
    </nav>
  );
}
