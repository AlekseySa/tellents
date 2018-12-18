import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTalents } from '../../reducers/find/actions';

import FindCardList from '../../components/find-card-list';
import CardTalent from '../../components/card-talent';

import '../../css/find.css';

class Talent extends React.Component {
  componentDidMount = async () => {
    try {
      const s = '';
      await this.props.getTalents(s);
    } catch (error) {
      console.error(error);
    }
  };

  renderTalent = () => {
    const { fetching, users } = this.props;
    return (
      <div>
        <div className="col-xs-2 left-sidebar left-col">
          <div className="panel panel-default">talent</div>
        </div>
        {fetching && <FindCardList items={users}>{item => <CardTalent item={item} />}</FindCardList>}
      </div>
    );
  };

  render() {
    return <div>{this.renderTalent()}</div>;
  }
}
Talent.propTypes = {
  users: PropTypes.array,
  fetching: PropTypes.bool,
};
export const stateToProps = state => ({
  users: state.findReducer.users,
  fetching: state.findReducer.fetching,
});
export const dispatchToProps = dispatch => ({
  getTalents: bindActionCreators(getTalents, dispatch),
});
export default connect(
  stateToProps,
  dispatchToProps,
)(Talent);
