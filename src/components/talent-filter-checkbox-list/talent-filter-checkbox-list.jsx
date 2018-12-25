import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormCheckbox from '../form-checkbox';
import CheckboxBlock from '../checkbox-block';

import { getTalents, chSearch } from '../../reducers/find/actions';

const experienceArray = ['Intern', 'Junior', 'Senior', 'Expert'];
const jobDoneSuccess = ['100%', '> 95%', '85-95%', '< 85%'];
const skillTestScore = ['Best (5)', '5-4.6', '4.6-4', '< 4'];
const freelancerRate = ['Best (5)', '5-4.8', '4.8-4.5', '< 4.5'];

class TalentFilterCheckboxList extends React.Component {
  state = {
    selectExperience: [],
  };

  nazvanie = () => {
    const selectExperienceString = this.state.selectExperience // эту ебалу в reducer и в заголовок запроса
      .map(itemIndex => experienceArray.filter((v, index) => index === itemIndex))
      .join(',');
    if (selectExperienceString) {
      this.props.chSearch(`"exp":"${selectExperienceString.toLowerCase()}"`);
      this.props.getTalents(`"exp":"${selectExperienceString.toLowerCase()}"`);
    } else {
      this.props.chSearch('');
      this.props.getTalents('');
    }
  };

  handleCheckExperienceOn = async indexCheck => {
    const { selectExperience } = this.state;
    selectExperience.push(indexCheck);
    await this.setState({ selectExperience });
    this.nazvanie();
  };

  handleCheckExperienceOff = async indexCheck => {
    const { selectExperience } = this.state;
    const newSelectExperience = selectExperience.filter(item => !(item === indexCheck));
    await this.setState({ selectExperience: newSelectExperience });
    this.nazvanie();
  };

  render() {
    return (
      <div className="panel panel-default">
        <CheckboxBlock
          title={'Experience:'}
          checkboxTextArray={experienceArray}
          handleCheck={this.handleCheckExperienceOn}
          handleCheckOff={this.handleCheckExperienceOff}
        />
        <CheckboxBlock title={'Job Done Success:'} checkboxTextArray={jobDoneSuccess} />
        <CheckboxBlock title={'Skill Test Score:'} checkboxTextArray={skillTestScore} />
        <CheckboxBlock title={'Freelancer Rate:'} checkboxTextArray={freelancerRate} />
      </div>
    );
  }
}

TalentFilterCheckboxList.propTypes = {
  getTalents: PropTypes.func,
};
const stateToProps = state => ({});
const dispatchToProps = dispatch => bindActionCreators({ getTalents, chSearch }, dispatch);
export default connect(
  stateToProps,
  dispatchToProps,
)(TalentFilterCheckboxList);
