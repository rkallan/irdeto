import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// Assets: Styles & Images
import './assets/styles/Navigation.css';

const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Faq',
    url: '/faq'
  },
  {
    title: 'Cryptocurrency',
    url: '/cryptocurrency'
  }
]

const isActiveLink = (match, location) => {
  return match && match.isExact ? match.isExact : false;
}

class Navigation extends Component {
  render() {
    const navItems = pages.map((navItem) =>
      <li className='navigation-item' key={navItem.title}>
        <NavLink to={navItem.url} className='navigation-link' activeClassName='is-active' isActive={isActiveLink} data-nav-title={navItem.title}>
          <span>
            {navItem.title}
          </span>
        </NavLink>
      </li>
    );

    return (
      <nav className='container' data-component='navigation'>
        <ul className='navigation-list'>
          {navItems}
        </ul>
      </nav>
    );
  }
}

export default Navigation;