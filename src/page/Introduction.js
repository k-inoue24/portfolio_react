import React from 'react';
import DetailItem from '../component/DetailItem';


class Introduction extends React.Component {
  render() {
    const DetailItemList = [
      {
        title: 'Carrer',
        text: 'CarrerCarrerCarrerCarrerCarrerCarrerCarrer'
      },
      {
        title: 'Target',
        text: 'TargetTargetTargetTargetTargetTargetTargetTarget'
      },
    ]
      return (
        <main>
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
        </main>
        )
    }
  }
  export default Introduction;