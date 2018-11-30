import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddSkill from './add-skill';
import { setSkills, setProf } from '../reducers/skills/actions';

function Profession({ item }) {
  return (
    <div>
    <div
                role='tabpanel'
                className='tab-pane my-tab step-3-open'
                id='skills'
              >
    <div className='step-3'>
                  <div className='skill-subcat skill-subcat--item'>
                    <div className='flexbox justify-space-between'>
                      <div className='skill-block'>
                        <div className='skill-block-title'>
                                Math &amp; Science
                        </div>
                        <div className='skill-block-list'>
                          <form>
                            <div className='checkbox-block'>
                              <input
                                type='checkbox'
                                id='math-1'
                                checked
                              />
                              <label for='math-1'>
                                <span className='checkbox-circle'>
                                  <span className='icon icon-check-mark' />
                                </span>
                                <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                </span>
                              </label>
                            </div>
                            <div className='checkbox-block'>
                              <input
                                type='checkbox'
                                id='math-2'
                                checked
                              />
                              <label for='math-2'>
                                <span className='checkbox-circle'>
                                  <span className='icon icon-check-mark' />
                                </span>
                                <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                </span>
                              </label>
                            </div>
                            <div className='checkbox-block'>
                              <input
                                type='checkbox'
                                id='math-3'
                                checked
                              />
                              <label for='math-3'>
                                <span className='checkbox-circle'>
                                  <span className='icon icon-check-mark' />
                                </span>
                                <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                </span>
                              </label>
                            </div>
                            <div className='checkbox-block'>
                              <input
                                type='checkbox'
                                id='math-4'
                                checked
                              />
                              <label for='math-4'>
                                <span className='checkbox-circle'>
                                  <span className='icon icon-check-mark' />
                                </span>
                                <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                </span>
                              </label>
                            </div>
                            <div className='checkbox-block'>
                              <input
                                type='checkbox'
                                id='math-5'
                                checked
                              />
                              <label for='math-5'>
                                <span className='checkbox-circle'>
                                  <span className='icon icon-check-mark' />
                                </span>
                                <span className='checkbox-text'>
                                        Lorem ipsum dolor sit amet, consectetur
                                </span>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className='skill-sub-block'>
                        <div className='skill-block-title'>Skills</div>
                        <div className='skill-tags-block clearfix'>
                          <div className='skill-tag'>Math</div>
                          <div className='skill-tag'>Trigonometry</div>
                          <div className='skill-tag'>Calculus</div>
                          <div className='skill-tag'>Trigonometry</div>
                          <div className='skill-tag'>Calculus</div>
                          <div className='skill-tag'>Trigonometry</div>
                          <div className='skill-tag'>Calculus</div>
                          <div className='skill-tag'>Math</div>
                        </div>
                      </div>
                    </div>
                    <div className='skill-block-footer'>
                      <a href='#'>View More</a>
                      <a href='#'>Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}
class SkillList extends React.Component {

  componentDidMount = async () => {
    try {
      await this.props.setSkills();
      const yourProfessions = this.props.professions.filter(prof => {
        return prof.selected;
      });
      this.props.setProf(yourProfessions);
      console.log(yourProfessions);
      /* const professionsList = yourProfessions.map((item, index) => {
        return (
          <Profession item={item} key={index} />
        )
      }); */
    }
    catch (error) {
      console.error(error);
    }
  }

  renderSkillList = () => {
    const { professionsList, fetching } = this.props
    return(
      <div>
        {fetching && (professionsList.map((item, index) => {
          return (
            <Profession item={item} key={index} />
          )
        }))}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderSkillList()}
        <AddSkill />
      </div>
    );
  }
}
SkillList.propTypes = {
  setSkills: PropTypes.func,
  professions: PropTypes.array,
  professionsList: PropTypes.array,
  fetching: PropTypes.bool
};

export const stateToProps = state => {
  return {
    professions: state.skillsReducer.professions,
    professionsList: state.skillsReducer.professionsList,
    fetching: state.skillsReducer.fetching
  };
};
export const dispatchToProps = dispatch => {
  return {
    setSkills: bindActionCreators(setSkills, dispatch),
    setProf: bindActionCreators(setProf, dispatch)
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(SkillList);