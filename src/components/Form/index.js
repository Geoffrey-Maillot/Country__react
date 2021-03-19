import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'semantic-ui-react';
import './styles.scss';

const Form = ({ onInputChange, onSelectChange, ValidForm, inputValue, selectValue, error }) => {
  const regionOptions = [
    { key: 'Africa', value: 'Africa', text: 'Africa' },
    { key: 'Americas', value: 'Americas', text: 'Americas' },
    { key: 'Asia', value: 'Asia', text: 'Asia' },
    { key: 'Europe', value: 'Europe', text: 'Europe' },
    { key: 'Oceania', value: 'Oceania', text: 'Oceania' },
  ];

  const onValidForm = (e) => {
    e.preventDefault();
    onInputChange('');
    ValidForm();
  };

  let content = '';

  if (error) {
    content = 'No result...';
  } else {
    content = 'Search for a country';
  }

  return (
    <form className="form" onSubmit={onValidForm}>
      <Input
        placeholder={content}
        icon="search"
        color="black"
        iconPosition="left"
        required
        error={error}
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
      <Select
        placeholder="Filter by Region"
        options={regionOptions}
        value={selectValue}
        onChange={(e) => {
          console.dir(e.target.value); // undefined ??
          onSelectChange(e.target.innerText);
        }}
      />
    </form>
  );
};
Form.propTypes = {
  onInputChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  ValidForm: PropTypes.func,
  inputValue: PropTypes.string,
  selectValue: PropTypes.string,
};

Form.defaultProps = {
  onInputChange: () => {},
  onSelectChange: () => {},
  ValidForm: () => {},
  inputValue: '',
  selectValue: '',
};

export default Form;
