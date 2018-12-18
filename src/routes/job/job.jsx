import React from 'react';

import '../../css/find.css';

class Job extends React.Component {
  renderJob = () => (
    <div>
      <div className="col-xs-2 left-sidebar left-col">
        <div className="panel panel-default">job</div>
      </div>
      <div className="center-cards">
        <div className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
          <div className="job-box-block">
            <div className="panel panel-default job-box awarded">
              <div className="job-box-header flexbox justify-space-between">job</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return <div>{this.renderJob()}</div>;
  }
}

export default Job;
