import React from 'react';

import FormCheckbox from '../form-checkbox';

import '../../css/find.css';

class CheckboxBlock extends React.Component {
  render() {
    const { title, checkboxTextArray } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">{title}</div>
        <div className="checkbox-list-block clearfix">
          {checkboxTextArray.map((checkboxText, index) => (
            <FormCheckbox
              checkboxText={checkboxText}
              index={index}
              handleCheck={this.props.handleCheck}
              handleCheckOff={this.props.handleCheckOff}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default CheckboxBlock;
