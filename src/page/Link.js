import React from 'react';
import Portfolio from '../component/Portfolio';
import '../css/common.scss';
import '../css/link.scss';

class Link extends React.Component {
  render() {
    const PortfolioLIst = [
      {
          link: 'https://inouekeita.work/',
          image: 'inouekeita_work.png',
          title: 'inouekeita.work',
          text: 'フリーランスの頃、営業用に活躍したポートフォリオサイトです。デザイン/コーディング/WordPressテーマ構築まで行いました。一部フリーランス時代の実務実績も掲載しているので、是非ご覧ください！'
        },
      {
          link: 'https://mannequin-code.com/',
          image: 'mannequin_code.png',
          title: 'Mannequin Code',
          text: '完全放置中の個人ブログです。もっと更新できるよう頑張ります。'
        },
      {
          link: 'https://github.com/k-inoue24',
          image: 'github.png',
          title: 'GitHub',
          text: '個人開発や自己学習の跡をレポジトリに残しています。ソースはSourceTreeと連携させて管理中です。'
        },
      {
          link: 'https://twitter.com/KeitaBangkok',
          image: 'twitter.png',
          title: 'Twitter',
          text: '海外生活していた頃は当時の模様をよくツイートしていました。現在はプログラミング情報の発信が中心です。'
        },
      ]
    return (
      <div className="inner">
        <h1 className="pageTitle">LINK</h1>
        <div className="linkWrap">
          {PortfolioLIst.map((portfolio,idx) => {
            return (
              <Portfolio
                link={portfolio.link}
                image={portfolio.image}
                title={portfolio.title}
                text={portfolio.text}
                key={idx}
              />
            );
          })}
        </div>
      </div>
        )
    }
  }
  export default Link;