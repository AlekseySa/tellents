import React from 'react';
import { Form, Field } from 'react-final-form';

import '../css/find.css';

class FormCheckbox extends React.Component {
  state = {
    visible: false,
  };

  checkOn = () => {
    this.setState({ visible: true });
  };

  checkOff = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { checkboxText } = this.props;
    return (
      <form>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-1.1" />
            <label for="checkbox-1.1">
              {visible && (
                <span className="filter-checkbox-on" onClick={this.checkOff}>
                  <span style={{ color: '#fff' }}>
                    <span className="icon icon-check-mark" />
                  </span>
                </span>
              )}
              {!visible && (
                <span className="filter-checkbox" onClick={this.checkOn}>
                  <span className="icon icon-check-mark" />
                </span>
              )}
              <span className="checkbox-text fix-margin">{checkboxText}</span>
            </label>
          </div>
        </div>
      </form>
    );
  }
}
export default FormCheckbox;

/* <Field name="employed" component="input" type="checkbox" />
<div class="checkbox-list-block clearfix">
  <div class="checkbox-block">
    <input type="checkbox" id="checkbox-1.1"/>
    <label for="checkbox-1.1">
      <span class="filter-checkbox">
        <span class="icon icon-check-mark"></span>
      </span>
      <span class="checkbox-text">Intern</span>
    </label>
  </div>
</div> */
