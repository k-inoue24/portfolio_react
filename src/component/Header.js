import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="siteTitle">
          K's Casual Portfolio<span>developed by React</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/introduction'>Introduction</Link>
            </li>
            <li>
              <Link to='/link'>Link</Link>
            </li>
          </ul>
        </nav>
      </header>
      )
  }
}
export default Header;
