import React from 'react';
import Item from '../component/Item';

class Top extends React.Component {
  render() {
    const ItemList = [
      {
        name: 'Top'
      },
      {
        name: 'Introduction'
      },
      {
        name: 'Skill'
      },
      {
        name: 'Link'
      },
    ]
    return (
      <div className='contentWrap'>
        <div className='itemWrap'>
          {ItemList.map((item,index) => {
            return (
              <Item
                name={item.name}
                key={index}
              />
            )
          })}
        </div>
      </div>
      )
  }
  }
  export default Top;