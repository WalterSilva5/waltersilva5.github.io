import { NavLink, withRouter } from 'react-router-dom';
import classes from './IndexHeader.module.scss';

import $ from 'jquery'

const IndexHeader = () => (
  <div>
    <nav className={`px-2 navbar navbar-expand-lg navbar-dark ${classes.Header}`}>
      <span className="navbar-brand"><b>Walter Silva</b></span>
      <a className="btn btn-danger d-md-none" type="a" data-toggle="collapse" onClick={e =>{$("#navbarNav").toggle()}} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>MENU</span>
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink
          className={`${classes.HeaderIndexLink}`}
          activeClassName={`text-danger  ${classes.HeaderLinkActive}`}
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={`${classes.HeaderIndexLink}`}
          activeClassName={`text-danger ${classes.HeaderLinkActive}`}
          to="/Portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          className={`${classes.HeaderIndexLink}`}
          activeClassName={`text-danger ${classes.HeaderLinkActive}`}
          to="/Contacts"
        >
          Contacts
        </NavLink>
      </div>
      <div>
        <a target="_blank" href="https://tiforadacaixa.blogspot.com.br"
        className={`btn btn-danger ${classes.HeaderIndexLink}`}>blog</a>
        <a target="_blank" href="https://www.linkedin.com/in/walter-pereira-245067161/"
          className={`btn btn-danger ${classes.HeaderIndexLink}`}>linkedin</a>
        <a target="_blank" href="https://github.com"
          className={`btn btn-danger ${classes.HeaderIndexLink}`}>github</a>
      </div>
    </nav>

  </div>
);

export default withRouter(IndexHeader);
