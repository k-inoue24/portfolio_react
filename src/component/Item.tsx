import React from 'react';
import { Link } from 'react-router-dom';

interface ItemProps {
  name: string,
  text: string,
  link: string
}
interface ItemState {
  isModalOpen: boolean,
}

class Item extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
      super(props);
        this.state = {
          isModalOpen: false,
        };
    }
      handleClickItem() {
        this.setState({
          isModalOpen: true,
        });
      }
      handleClickClose() {
        this.setState({
          isModalOpen: false,
        });
      }
    render() {
        let itemModal;
        if(this.state.isModalOpen) {
          itemModal = (
            <div className="itemModalLayer" onClick={() => {this.handleClickClose()}}>
              <div className="itemModal" onClick={(e) => { e.stopPropagation() }}>
                <div className="itemTitle modalTitle">{this.props.name}</div>
                <div className="itemText">{this.props.text}</div>
                <Link className="itemBtn itemDetailBtn" to={this.props.link}>詳細を見る</Link>
                <button className="itemBtn itemCloseBtn" onClick={() => {this.handleClickClose()}}>閉じる</button>
              </div>
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
          CLICK
        </div>
        {itemModal}
        </div>
      )
  }
  }
  export default Item;