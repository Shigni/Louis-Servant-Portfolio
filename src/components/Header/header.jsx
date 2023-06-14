import { NavLink } from "react-router-dom";

import "./header.scss";

export function Header() {
  const title = "Louis.";
  return (
    <nav>
      <h1 className="logo">{title}</h1>
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
