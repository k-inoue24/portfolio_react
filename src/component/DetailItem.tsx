import React from 'react';

interface DetailItemProps {
  text: string,
  title: string
}
class DetailItem extends React.Component<DetailItemProps> {
  render() {
    var brText = this.props.text.split('<br>').map(function(text,idx) {
      return (<p key={idx}>{text}</p>);
    });
        return (
            <div className="introductionItem">
              <div className="titleContent">
                <h2>{this.props.title}</h2>
              </div>
            <div className="textContent">
              {brText}
              </div>
            </div>
        )
    }
}

export default DetailItem;