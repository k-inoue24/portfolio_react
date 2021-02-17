import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="inner">
          <div className="siteTitle">
            K's Casual Portfolio<span>developed with React</span>
          </div>
          {/* <h1 className="siteTitle">
            K's Casual Portfolio<span>developed with React</span>
          </h1> */}
        </div>
          <nav>
            <ul>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/introduction'>INTRODUCTION</Link>
              </li>
              <li>
                <Link to='/link'>LINK</Link>
              </li>
            </ul>
          </nav>
      </header>
      )
  }
}
export default Header;
