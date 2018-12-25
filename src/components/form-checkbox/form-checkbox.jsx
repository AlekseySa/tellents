import React from 'react';

import '../../css/find.css';

class FormCheckbox extends React.Component {
  state = {
    visible: false,
  };

  checkOn = () => {
    this.setState({ visible: true });
    this.props.handleCheck(this.props.index);
  };

  checkOff = () => {
    this.setState({ visible: false });
    this.props.handleCheckOff(this.props.index);
  };

  render() {
    const { visible } = this.state;
    const { checkboxText } = this.props;
    return (
      <div className="checkbox-block">
        <input type="checkbox" id="checkbox-1.1" />
        <label for="checkbox-1.1" onClick={visible ? this.checkOff : this.checkOn}>
          {visible && (
            <span className="filter-checkbox-on">
              <span style={{ color: '#fff' }}>
                <span className="icon icon-check-mark" />
              </span>
            </span>
          )}
          {!visible && (
            <span className="filter-checkbox">
              <span className="icon icon-check-mark" />
            </span>
          )}
          <span className="checkbox-text">{checkboxText}</span>
        </label>
      </div>
    );
  }
}
export default FormCheckbox;
