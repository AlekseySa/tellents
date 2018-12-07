import React from 'react';
import PropTypes from 'prop-types';

export function SkillTag({ skillTags }) {
  return (
    <div>
      {skillTags.map((item, index) => (
        <div key={index} className="skill-tag">
          {item.name}
        </div>
      ))}
    </div>
  );
}

export function Skill({ skillCategories }) {
  const yourSkills = skillCategories.filter(skill => skill.selected);
  return (
    <div>
      {yourSkills.map((item, index) => (
        <div key={index} className="checkbox-block">
          <input type="checkbox" id={`math-${index + 1}`} checked />
          <label for={`math-${index + 1}`}>
            <span className="checkbox-circle">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">{item.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

class SkillList extends React.Component {
  componentDidMount = () => {
    this.props.skillsComponentDidMount();
  };

  deleteProfession = () => {
    console.log('delete');
  };

  editProfession = item => {
    this.props.checkProf(item);
    this.props.openEditSkill();
  };

  renderSkillList = () => {
    const { professionsList, fetching } = this.props;
    return (
      <div>
        {fetching &&
          professionsList.map((item, index) => (
            <div key={index}>
              <div className="">
                <div className="skill-subcat skill-subcat--item">
                  <div className="flexbox justify-space-between">
                    <div className="skill-block">
                      <div className="skill-block-title">{item.name}</div>
                      <div className="skill-block-list">
                        <form>
                          <Skill skillCategories={item.skill_categories} />
                        </form>
                      </div>
                    </div>
                    <div className="skill-sub-block">
                      <div className="skill-block-title">Skills</div>
                      <div className="skill-tags-block clearfix">
                        <SkillTag skillTags={item.skill_tags} />
                      </div>
                    </div>
                  </div>
                  <div className="skill-block-footer">
                    <a onClick={this.deleteProfession}>Delete</a>
                    <a onClick={() => this.editProfession(item)}>Edit</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  render() {
    return <div>{this.renderSkillList()}</div>;
  }
}
SkillList.propTypes = {
  skillsComponentDidMount: PropTypes.func,
  professions: PropTypes.array,
  professionsList: PropTypes.array,
  fetching: PropTypes.bool,
  checkProf: PropTypes.func,
  openEditSkill: PropTypes.func,
};
export default SkillList;
