import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link, Redirect, Route, Switch, Router } from 'react-router-dom';

import { setSkills, setProf, checkProf, postChangeProf, changeTag } from '../reducers/skills/actions';

import SkillList from '../components/skill-list';
import SkillAdd from '../components/skill-add';
import SkillEdit from '../components/skill-edit';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/styles/styles.css';
import '../css/styles/media.css';

class Skills extends React.Component {
  state = {
    skill_add: false,
    skill_edit: false,
    skill_list: true,
  };

  componentDidMount = async () => {
    try {
      await this.props.setSkills();
      const yourProfessions = this.props.professions.filter(prof => prof.selected);
      this.props.setProf(yourProfessions);
      console.log(yourProfessions);
    } catch (error) {
      console.error(error);
    }
  };

  openAddSkill = () => {
    this.setState({
      skill_add: true,
      skill_edit: false,
      skill_list: false,
    });
  };

  openEditSkill = () => {
    this.setState({
      skill_add: false,
      skill_edit: true,
      skill_list: false,
    });
  };

  openSkillList = () => {
    this.setState({
      skill_add: false,
      skill_edit: false,
      skill_list: true,
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

  render() {
    const { step, skill_add, skill_list, skill_edit } = this.state;
    const { fetching, professions, professionsList, checkProfession, tagList } = this.props;
    return (
      <div role="tabpanel" className="tab-pane my-tab" id="skills">
        <div className="steps-nav flexbox justify-space-between">
          <div className="steps-nav-title">Your Shared Skills</div>
          <div className="steps-nav-btn">
            {skill_add && (
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
            {skill_edit && (
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
            {skill_list && (
              <button type="button" onClick={this.openAddSkill} className="btn btn-blue btn-bold step-toggler">
                Add
              </button>
            )}
          </div>
        </div>
        {skill_add && (
          <SkillAdd
            checkProf={this.checkProf}
            openEditSkill={this.openEditSkill}
            professions={professions}
            fetching={fetching}
          />
        )}
        {skill_edit && (
          <SkillEdit
            changeProfessionSkill={this.changeProfessionSkill}
            changeProfessionSkillTag={this.changeProfessionSkillTag}
            changeTag={this.changeTag}
            checkProfession={checkProfession}
            tagList={tagList}
          />
        )}
        {skill_list && (
          <SkillList
            skillsComponentDidMount={this.componentDidMount}
            checkProf={this.checkProf}
            openEditSkill={this.openEditSkill}
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
});
export default connect(
  stateToProps,
  dispatchToProps,
)(Skills);
