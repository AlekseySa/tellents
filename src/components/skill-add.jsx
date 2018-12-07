import React from 'react';
import PropTypes from 'prop-types';

class SkillAdd extends React.Component {
  state = {
    disabled: true,
  };

  handleProfession = item => {
    this.props.checkProf(item);
    this.setState({ disabled: false });
    console.log(item);
  };

  openEditSkill = () => {
    this.props.openEditSkill();
  };

  renderAddSkill = () => {
    const { disabled } = this.state;
    const { professions, fetching } = this.props;
    return (
      <div>
        <div className="">
          <div className="skill-block skill-cat">
            <div className="skill-block-title">Choose Your Skill</div>
            <div className="skill-block-list">
              <form>
                {fetching &&
                  professions.map((item, index) => (
                    <div key={index} className="checkbox-block">
                      <input
                        type="radio"
                        id={`cat-${index + 1}`}
                        onClick={() => this.handleProfession(item)}
                        name="profession"
                      />
                      <label for={`cat-${index + 1}`}>
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark" />
                        </span>
                        <span className="checkbox-text">{item.name}</span>
                      </label>
                    </div>
                  ))}
              </form>
            </div>
            <button type="button" onClick={this.openEditSkill} disabled={disabled} className="btn btn-blue btn-bold">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderAddSkill()}</div>;
  }
}
SkillAdd.propTypes = {
  professions: PropTypes.array,
  fetching: PropTypes.bool,
  checkProf: PropTypes.func,
  openEditSkill: PropTypes.func,
};
export default SkillAdd;
