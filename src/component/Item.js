import React from 'react';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
        };
      }
      handleClickItem() {
        this.setState({
          isModalOpen: true,
        })
      }
      handleClickClose() {
          this.setState({
            isModalOpen: false,
          })
      }
    render() {
        let itemModal;
        if(this.state.isModalOpen) {
          itemModal = (
            <div className="itemModal">
              <div className="itemTitle">{this.props.name}</div>
              <div className="itemText">{this.props.text}</div>
              <button onClick={() => {this.handleClickClose()}}>閉じる</button>
            </div>
          )
        } else {
          itemModal = (
            <div className="itemModal">
            </div>
          )
        }
    return (
        <div
          className="item"
        >
        <div
          className="itemTitle"
        >
        {this.props.name}
        </div>
        <div
          className="itemDetail"
          onClick={() => { this.handleClickItem() }}
        >
          Click
        </div>
        {itemModal}
        </div>
      )
  }
  }
  export default Item;