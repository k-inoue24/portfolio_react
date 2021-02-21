import React from 'react';
import Item from '../component/Item';
import '../css/common.scss';
import '../css/top.scss';

class Top extends React.Component {
  render() {
    const ItemList = [
      {
        name: 'INTRODUCTION',
        text: '経歴や今後の目標、現在のスキルセットなどを紹介します！',
        link: '/introduction'
      },
      {
        name: 'LINK',
        text: '個人ブログやGitHubなど、各種リンクを掲載しています！',
        link: '/link'
      },
    ]
    return (
      <div className="inner">
        <h1 className="pageTitle">This is the casual site for challenging React!</h1>
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
      </div>
      )
  }
  }
  export default Top;