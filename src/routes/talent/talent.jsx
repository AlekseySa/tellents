import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTalents, getMoreTalents } from '../../reducers/find/actions';

import FindCardList from '../../components/find-card-list';
import CardTalent from '../../components/card-talent';

import TalentFilterCheckboxList from '../../components/talent-filter-checkbox-list';

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

  getMoreCards = () => {
    const { meta, search } = this.props;
    this.props.getMoreTalents(search, meta.next_page);
  };

  renderTalent = () => {
    const { fetching, users } = this.props;
    return (
      <div className="flex">
        <div className="col-xs-2 left-sidebar left-col">
          <TalentFilterCheckboxList />
        </div>
        {fetching && (
          <FindCardList
            items={users}
            loadMore={this.getMoreCards}
            visible={this.props.meta.next_page}
            renderContent={item => <CardTalent item={item} />}
          />
        )}
      </div>
    );
  };

  render() {
    return <div>{this.renderTalent()}</div>;
  }
}
Talent.propTypes = {
  users: PropTypes.array,
  meta: PropTypes.object,
  fetching: PropTypes.bool,
  getTalents: PropTypes.func,
  getMoreTalents: PropTypes.func,
  search: PropTypes.string,
};
export const stateToProps = state => ({
  users: state.findReducer.users,
  fetching: state.findReducer.fetching,
  meta: state.findReducer.meta,
  search: state.findReducer.search,
});
export const dispatchToProps = dispatch => ({
  getTalents: bindActionCreators(getTalents, dispatch),
  getMoreTalents: bindActionCreators(getMoreTalents, dispatch),
});
export default connect(
  stateToProps,
  dispatchToProps,
)(Talent);
