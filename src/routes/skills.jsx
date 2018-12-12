import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSkills, setProf, checkProf, postChangeProf, changeTag, postDeleteProf } from '../reducers/skills/actions';

import SkillList from '../components/skill-list';
import SkillAdd from '../components/skill-add';
import SkillEdit from '../components/skill-edit';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

class Skills extends React.Component {
  state = {
    skillAdd: false,
    skillEdit: false,
    skillList: true,
  };

  componentDidMount = async () => {
    try {
      await this.props.setSkills();
      const yourProfessions = this.props.professions.filter(prof => prof.selected);
      this.props.setProf(yourProfessions);
    } catch (error) {
      console.error(error);
    }
  };

  openAddSkill = () => {
    this.setState({
      skillAdd: true,
      skillEdit: false,
      skillList: false,
    });
  };

  openEditSkill = () => {
    this.setState({
      skillAdd: false,
      skillEdit: true,
      skillList: false,
    });
  };

  openSkillList = () => {
    this.setState({
      skillAdd: false,
      skillEdit: false,
      skillList: true,
    });
  };

  handleSetSkills = () => {
    this.props.setSkills();
  };

  handleSetProf = yourProfessions => {
    this.props.setProf(yourProfessions);
  };

  checkProf = item => {
    this.props.checkProf(item);
  };

  changeProfessionSkill = (checkProfession, skillCategories) => {
    checkProfession.skill_categories = skillCategories;
    this.props.checkProf(checkProfession);
  };

  changeProfessionSkillTag = (checkProfession, SkillTag) => {
    checkProfession.skill_tags = SkillTag;
    this.props.checkProf(checkProfession);
  };

  postChangeProfession = async () => {
    const { checkProfession, professionsList } = this.props;
    await this.props.postChangeProf(checkProfession, professionsList);
    this.openSkillList();
  };

  changeTag = s => {
    this.props.changeTag(s);
  };

  deleteProfession = async item => {
    const { professionsList } = this.props;
    this.setState({ skillList: false });
    await this.props.postDeleteProf(item, professionsList);
    this.openSkillList();
  };

  render() {
    const { skillAdd, skillList, skillEdit } = this.state;
    const { fetching, professions, professionsList, checkProfession, tagList } = this.props;
    return (
      <div role="tabpanel" className="tab-pane my-tab" id="skills">
        <div className="steps-nav flexbox justify-space-between">
          <div className="steps-nav-title">Your Shared Skills</div>
          <div className="steps-nav-btn">
            {skillAdd && (
              <div className="btn-group clearfix">
                <button
                  type="button"
                  onClick={this.openSkillList}
                  className="btn btn-blue-border btn-bold step-toggler"
                >
                  Back
                </button>
                <button type="button" disabled="disabled" className="btn btn-blue btn-bold step-toggler">
                  Done
                </button>
              </div>
            )}
            {skillEdit && (
              <div className="btn-group clearfix">
                <button type="button" onClick={this.openAddSkill} className="btn btn-blue-border btn-bold step-toggler">
                  Back
                </button>
                <button
                  type="button"
                  onClick={this.postChangeProfession}
                  className="btn btn-blue btn-bold step-toggler"
                >
                  Done
                </button>
              </div>
            )}
            {skillList && (
              <button type="button" onClick={this.openAddSkill} className="btn btn-blue btn-bold step-toggler">
                Add
              </button>
            )}
          </div>
        </div>
        {skillAdd && (
          <SkillAdd
            checkProf={this.checkProf}
            openEditSkill={this.openEditSkill}
            professions={professions}
            fetching={fetching}
          />
        )}
        {skillEdit && (
          <SkillEdit
            changeProfessionSkill={this.changeProfessionSkill}
            changeProfessionSkillTag={this.changeProfessionSkillTag}
            changeTag={this.changeTag}
            checkProfession={checkProfession}
            tagList={tagList}
          />
        )}
        {skillList && (
          <SkillList
            skillsComponentDidMount={this.componentDidMount}
            checkProf={this.checkProf}
            openEditSkill={this.openEditSkill}
            deleteProfession={this.deleteProfession}
            professionsList={professionsList}
            fetching={fetching}
          />
        )}
      </div>
    );
  }
}
Skills.propTypes = {
  setSkills: PropTypes.func,
  setProf: PropTypes.func,
  changeTag: PropTypes.func,
  checkProf: PropTypes.func,
  postChangeProf: PropTypes.func,
  professions: PropTypes.array,
  professionsList: PropTypes.array,
  fetching: PropTypes.bool,
  checkProfession: PropTypes.object,
  tagList: PropTypes.array,
  postDeleteProf: PropTypes.func,
};

export const stateToProps = state => ({
  professions: state.skillsReducer.professions,
  professionsList: state.skillsReducer.professionsList,
  fetching: state.skillsReducer.fetching,
  checkProfession: state.skillsReducer.checkProfession,
  tagList: state.skillsReducer.tagList,
});
export const dispatchToProps = dispatch => ({
  setSkills: bindActionCreators(setSkills, dispatch),
  setProf: bindActionCreators(setProf, dispatch),
  checkProf: bindActionCreators(checkProf, dispatch),
  postChangeProf: bindActionCreators(postChangeProf, dispatch),
  changeTag: bindActionCreators(changeTag, dispatch),
  postDeleteProf: bindActionCreators(postDeleteProf, dispatch),
});
export default connect(
  stateToProps,
  dispatchToProps,
)(Skills);
