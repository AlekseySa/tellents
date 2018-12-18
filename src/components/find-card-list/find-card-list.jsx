import React from 'react';

import CardTalent from '../card-talent';

const FindCardList = props => (
  <div>
    {props.items.map((item, index) => (
      <div key={index} className="center-cards">
        <div className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
          <div className="job-box-block">
            <div className="panel panel-default job-box awarded">
              <div className="job-box-header flexbox justify-space-between">{props.children(item)}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default FindCardList;
