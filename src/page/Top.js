import React from 'react';
import Item from '../component/Item';
import '../css/common.scss';
import '../css/top.scss';

class Top extends React.Component {
  render() {
    const ItemList = [
      {
        name: 'INTRODUCTION',
        text: '経歴やこれからの目標、趣味などをゆるーく紹介します！',
        link: '/introduction'
      },
      {
        name: 'LINK',
        text: '個人ブログなど、ポートフォリオ的なものを掲載しています！',
        link: '/link'
      },
    ]
    return (
      <main>
        <div className='itemWrap'>
          {ItemList.map((item,index) => {
            return (
              <Item
                name={item.name}
                text={item.text}
                link={item.link}
                key={index}
              />
            )
          })}
        </div>
      </main>
      )
  }
  }
  export default Top;