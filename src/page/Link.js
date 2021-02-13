import React from 'react';
import Portfolio from '../component/Portfolio';

class Link extends React.Component {
  render() {
    const PortfolioLIst = [
        {
          image: 'test.png',
          title: 'inouekeita.work',
          text: 'フリーランスの頃、営業用に活躍したポートフォリオサイトです。デザイン/コーディング/WordPressテーマ構築まで行いました。一部フリーランス時代の実務実績も掲載しているので、是非ご覧ください！'
        },
        {
          image: 'test.png',
          title: 'Mannequin Code',
          text: '完全放置中の個人ブログです。もっと更新できるよう頑張ります。'
        },
        {
          image: 'test.png',
          title: 'GitHub',
          text: '個人開発や自己学習の跡をレポジトリに残しています。ソースはSourceTreeと連携させて管理しています。'
        },
        {
          image: 'test.png',
          title: 'Twitter',
          text: '海外生活していた頃は当時の模様をよくツイートしていました。現在はプログラミング情報の発信が中心です。'
        },
      ]
      return (
        <div className="linkWrap">
          {PortfolioLIst.map((portfolio,idx) => {
            return (
              <Portfolio
                image={portfolio.image}
                title={portfolio.title}
                text={portfolio.text}
                key={idx}
              />
            );
          })}

        </div>
        )
    }
  }
  export default Link;