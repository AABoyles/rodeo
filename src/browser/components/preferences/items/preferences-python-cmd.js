import React from 'react';
import PreferencesItemErrors from '../preferences-item-errors.jsx';
import commonReact from '../../../services/common-react';

export default React.createClass({
  displayName: 'PreferencesPythonCmd',
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    onSelectFile: React.PropTypes.func.isRequired,
    originalValue: React.PropTypes.string,
    value: React.PropTypes.string
  },
  contextTypes: {
    text: React.PropTypes.object
  },
  shouldComponentUpdate: function (nextProps) {
    return commonReact.shouldComponentUpdate(this, nextProps);
  },
  render: function () {
    const props = this.props,
      text = this.context.text,
      className = commonReact.getClassNameList(this);
    let errors;

    if (props.originalValue !== props.value) {
      className.push('preferences-python-cmd--modified');
    }

    if (props.errors && props.errors.length) {
      errors = <PreferencesItemErrors errors={props.errors}/>;
    }

    return (
      <div className={className.join(' ')}>
        <label htmlFor={props.id}>{text[props.label]}</label>
        <div className="input-group">
          <input className="form-control" onChange={props.onChange} type="text" value={props.value}/>
          <span className="input-group-container">
            <button className="btn btn-default" onClick={props.onSelectFile}>{'…'}</button>
          </span>
        </div>
        {errors}
      </div>
    );
  }
});
