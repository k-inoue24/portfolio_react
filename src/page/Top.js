import React from 'react';
import Item from '../component/Item';

class Top extends React.Component {
  render() {
    const ItemList = [
      {
        name: 'Introduction',
        text: '経歴やこれからの目標、趣味などをゆるーく紹介します！'
      },
      {
        name: 'Link',
        text: '個人ブログなど、ポートフォリオ的なものを掲載しています！'
      },
    ]
    return (
      <div className='contentWrap'>
        <div className='itemWrap'>
          {ItemList.map((item,index) => {
            return (
              <Item
                name={item.name}
                text={item.text}
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