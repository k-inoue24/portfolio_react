import React from 'react';
import DetailItem from '../component/DetailItem';
import '../css/common.scss';
import '../css/introduction.scss';

class Introduction extends React.Component {
  render() {
    const DetailItemList = [
      {
        title: 'PROFILE',
        text: '名前：井上恵太<br>年齢：26歳<br>居住地：東京都渋谷区'
      },
      {
        title: 'CAREER',
        text: '元より海外で生活することが夢だったので、海外拠点にフルリモートで働きやすいWeb制作の独学を始めました。<br>大学休学後、フリーランスwebエンジニアとして東南アジアで2年ほど生活してしまいしたが、次第にプログラミングスキルの向上に情熱を持つようになり、よりレベルアップを図れる日本の制作企業に就職しました。'
      },
      {
        title: 'TARGET',
        text: 'フロントエンドエンジニアとして、モダンなスキルへのキャッチアップは必須事項であると考えており、現在はVue/React/TypeScriptのインプット+アウトプットを進めています。<br>VueとReactについては最終的にはいずれか一方に絞る予定ですが、現在は自分の進路を広げるために両方のレベルアップを図っています。<br>それぞれ、Vue CLIとCreate React Appを用いたSPAの実装を経験済みで、現在は簡易的なアプリケーションを開発中です。<br>モダンなスキルを使用し、自社サービスの開発/改善に貢献できるエンジニアになるため、日々楽しみながら努力していく所存です。'
      },
      {
        title: 'SKILL',
        text: 'JavaScript(ES6)/jQuery/Vue/React/HTML5(Pug,Jade)/CSS3(Sass)/gulp/Grunt/WordPress/PHP/BootStrap4/Git(※1)/Photoshop/Illustrator<br>※1 ソースは、GitとSourceTreeを連携して管理しています。'
      },
      {
        title: 'QUALIFICATION',
        text: 'TOEIC885点/英語検定準1級<br>※羽田空港にて外国人VIPのインバウンド/アウトバウンド業務も1年間経験しており、英語でのコミュニケーションが可能です。'
      },
    ]
    return (
      <div className="inner">
        <h1 className="pageTitle">INTRODUCTION</h1>
        <div className="introductionWrap">
          {
            DetailItemList.map((detailItem,idx) => {
              return (
                <DetailItem
                  title={detailItem.title}
                  text={detailItem.text}
                  key={idx}
                />
              )
            })
          }
        </div>
      </div>
        )
    }
  }
  export default Introduction;