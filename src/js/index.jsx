/* global document */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './modules/nav';
import Home from './modules/home';
import Team from './modules/team';
import Kanban from './modules/kanban';
import Resources from './modules/resources';

require('../sass/index.scss');

class App extends React.Component {
  state = {
    open: false
  };

  closeMenu = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <HashRouter>
        <div
          onClick={open && this.closeMenu}
          className={`container ${open ? 'menu-open' : ''}`}
          id="container"
        >
          <Nav
            open={open}
            setOpen={() => this.setState({ open: !open })}
            location={(this.props.history || {}).location}
          />
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/resources" component={Resources} />
        </div>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById('app'));
