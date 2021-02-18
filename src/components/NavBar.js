import React from 'react';
import { NavLink } from "react-router-dom";


class NavBar extends React.Component {

  render() {
    return(
      <nav className="Nav">
        <NavLink exact activeClassName="active" className="nav-link" to="/">home</NavLink>
        <NavLink exact activeClassName="active" className="nav-link" to="/birthday">birthday</NavLink>
      </nav>
    )

  }
}

export default NavBar
