import React from 'react';
import PropTypes from 'prop-types';
import '../../css/skills.css';

class SkillEdit extends React.Component {
  state = {
    tag: '',
    displayDropdown: 'dropdown-tags display-none',
  };

  handleChange = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: e.currentTarget.value });
    const s = e.currentTarget.value;
    this.props.changeTag(s);
    this.setState({ displayDropdown: s ? 'dropdown-tags display-block' : 'dropdown-tags display-none' });
  };

  handleAddSkill = idSkill => {
    const { checkProfession } = this.props;
    const changeCheckSkill = checkProfession.skill_categories.map(skill => {
      skill.id === idSkill ? (skill.selected = !skill.selected) : (skill.selected = skill.selected);
      return skill;
    });
    this.props.changeProfessionSkill(checkProfession, changeCheckSkill);
  };

  handleDeleteSkillTag = item => {
    const { checkProfession } = this.props;
    const changeCheckSkillTag = checkProfession.skill_tags.filter(tag => !(tag.id === item.id));
    this.props.changeProfessionSkillTag(checkProfession, changeCheckSkillTag);
  };

  addSkillTag = tag => {
    const { checkProfession } = this.props;

    const changeCheckSkillTag = checkProfession.skill_tags;
    changeCheckSkillTag.push(tag);
    this.props.changeProfessionSkillTag(checkProfession, changeCheckSkillTag);
  };

  onBlur = () => {
    setTimeout(() => {
      this.setState({
        displayDropdown: 'dropdown-tags display-none',
        tag: '',
      });
    }, 100);
  };

  renderSkillEdit = () => {
    const { checkProfession, tagList } = this.props;
    return (
      <div>
        <div className="">
          <div className="skill-subcat">
            <div className="flexbox justify-space-between">
              <div className="skill-block">
                <div className="skill-block-title">{checkProfession.name}</div>
                <div className="skill-block-list">
                  <form>
                    <div>
                      {checkProfession.skill_categories.map((item, index) => (
                        <div key={index} className="checkbox-block">
                          <input
                            type="checkbox"
                            id={`math-${index + 1}`}
                            defaultChecked={item.selected}
                            onChange={() => this.handleAddSkill(item.id)}
                          />
                          <label for={`math-${index + 1}`}>
                            <span className="checkbox-circle">
                              <span className="icon icon-check-mark" />
                            </span>
                            <span className="checkbox-text">{item.name}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
              <div className="skill-sub-block">
                <div>
                  <form className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="tag"
                      value={this.state.tag}
                      onChange={this.handleChange}
                      onBlur={this.onBlur}
                    />
                  </form>
                  <div className={this.state.displayDropdown}>
                    {tagList &&
                      tagList.map((tag, index) => (
                        <div
                          className="tag-list-element"
                          id={`tag-list-index-${index}`}
                          key={tag.id}
                          onClick={() => this.addSkillTag(tag)}
                        >
                          {tag.name}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="skill-tags-block clearfix">
                  <div>
                    {checkProfession.skill_tags.map((item, index) => (
                      <div key={index} className="ui-select-match-item btn btn-default btn-xs skill-tag">
                        {item.name}
                        <span className="close btnskilltag" onClick={() => this.handleDeleteSkillTag(item)}>
                          ×
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderSkillEdit()}</div>;
  }
}
SkillEdit.propTypes = {
  changeProfession: PropTypes.func,
  changeTag: PropTypes.func,
  checkProfession: PropTypes.object,
  tagList: PropTypes.array,
};
export default SkillEdit;
