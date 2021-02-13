import React from 'react';
import Top from '../page/Top';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
          itemName: ''
        };
      }
  handleClickItem(itemName) {
        this.setState({
          isModalOpen: true,
          itemName: itemName
        })
      }
      handleClickClose() {
          this.setState({
            isModalOpen: false,
            itemName: ''
          })
      }
    render() {
        let itemModal;
        if(this.state.isModalOpen) {
          itemModal = (
            <div className="itemModal">
              {this.state.itemName}
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
          className="span"
          onClick={() => { this.handleClickItem(this.props.name) }}
        >
          {this.props.name}
          </div>
          {itemModal}
          </div>
      )
  }
  }
  export default Item;