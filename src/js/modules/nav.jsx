import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItems = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'About The Team',
    to: '/team'
  },
  {
    name: 'The Kanban Challenge',
    to: '/kanban'
  },
  // TODO add a (regex (?)) check to make external URLs an `a` tag instead of a Link
  // {
  //   name: 'Facebook',
  //   to: 'https://www.facebook.com/IMSAeleMENT'
  // },
  {
    name: 'Student Resources',
    to: '/resources'
  }
];

export default class Nav extends PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
  };

  mapMenuItem = ({ name, to }) => (
    <ul
      key={name}
      className={
        (this.props.location || {}).pathname === to
          ? 'main-nav'
          : 'secondary-nav'
      }
    >
      <li><Link to={to}>{name}</Link></li>
    </ul>
  );

  render() {
    const { open, setOpen } = this.props;
    return (
      <div>
        <div className="top-bar">
          <div
            id="trigger-menu"
            className={`menu-icon ${open ? 'active' : ''}`}
            onClick={setOpen}
          >
            <span />
            <div
              className={`title ${open ? 'menu-open' : ''}`}
              style={{ boxShadow: 'none', background: 'none' }}
            >
              {open ? 'close' : 'menu'}
            </div>
          </div>
        </div>
        <div
          className="pusher"
          style={{ minHeight: '805px', position: 'absolute' }}
        >
          <nav className="menu" id="menu">
            <div className="menu-close" />
            {MenuItems.map(this.mapMenuItem)}
            <ul className="secondary-nav">
              <li><p>This website is not sponsored by IMSA.</p></li>
            </ul>
          </nav>

        </div>
      </div>
    );
  }
}
