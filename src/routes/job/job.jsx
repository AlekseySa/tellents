import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getJobs, getMoreJobs } from '../../reducers/find/actions';

import FindCardList from '../../components/find-card-list';
import CardJob from '../../components/card-job';

import '../../css/find.css';

class Job extends React.Component {
  componentDidMount = async () => {
    try {
      const s = '';
      await this.props.getJobs(s);
    } catch (error) {
      console.error(error);
    }
  };

  getMoreCards = () => {
    const { metaJobs } = this.props;
    const s = '';
    this.props.getMoreJobs(s, metaJobs.next_page);
  };

  renderJob = () => {
    const { fetchingJobs, jobs } = this.props;
    return (
      <div>
        <div className="col-xs-2 left-sidebar left-col">
          <div className="panel panel-default">job</div>
        </div>
        {fetchingJobs && (
          <FindCardList items={jobs} loadMore={this.getMoreCards} renderContent={item => <CardJob item={item} />} />
        )}
      </div>
    );
  };

  render() {
    return <div>{this.renderJob()}</div>;
  }
}
Job.propTypes = {
  jobs: PropTypes.array,
  fetchingJobs: PropTypes.bool,
};
export const stateToProps = state => ({
  jobs: state.findReducer.jobs,
  fetchingJobs: state.findReducer.fetchingJobs,
  metaJobs: state.findReducer.metaJobs,
});
export const dispatchToProps = dispatch => ({
  getJobs: bindActionCreators(getJobs, dispatch),
  getMoreJobs: bindActionCreators(getMoreJobs, dispatch),
});
export default connect(
  stateToProps,
  dispatchToProps,
)(Job);
