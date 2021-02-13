import React from 'react';

class Portfolio extends React.Component {
    render() {
        return (
          <li className="linkItem">
            <img className="linkImg" src={this.props.image} alt=""/>
            <div className="linkContent">
              <h2 className="linkTitle">{this.props.title}</h2>
              <div className="linkText">{this.props.text}</div>
            </div>
          </li>
        )
    }
}
export default Portfolio;