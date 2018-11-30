import React from 'react';
import PropTypes from 'prop-types';

class AddSkill extends React.Component {

  renderAddSkill = () => {
    return(
      <div>

      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderAddSkill()}
      </div>
    );
  }
}
AddSkill.propTypes = {
  /* a: PropTypes.string, */
};
export default AddSkill;