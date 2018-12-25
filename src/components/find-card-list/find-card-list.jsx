import React from 'react';

import CardTalent from '../card-talent';

const FindCardList = props => (
  <div>
    {props.items.map((item, index) => (
      <div key={index} className="center-cards">
        {props.renderContent(item)}
      </div>
    ))}
    <div class="job-boxes-footer">
      {props.visible && (
        <button class="btn btn-bg-transparent blue-color btn-bold" onClick={props.loadMore}>
          Load more
        </button>
      )}
    </div>
  </div>
);

export default FindCardList;
