import React from 'react';

class DetailItem extends React.Component {
    render() {
        return (
            <div className="introductionItem">
              <div className="titleContent">
                <h2>{this.props.title}</h2>
              </div>
              <div className="textContent">
                <p>{this.props.text}</p>
              </div>
            </div>
        )
    }
}

export default DetailItem;