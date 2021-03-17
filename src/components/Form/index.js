import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'semantic-ui-react';
import './styles.scss';

const Form = ({ onInputChange, onSelectChange, ValidForm, inputValue, selectValue, requestByRegion, firstRequest }) => {
  const regionOptions = [
    { key: 're', value: 'all', text: 'All' },
    { key: 'af', value: 'africa', text: 'Africa' },
    { key: 'am', value: 'america', text: 'America' },
    { key: 'as', value: 'asia', text: 'Asia' },
    { key: 'eu', value: 'europe', text: 'Europe' },
    { key: 'oc', value: 'oceania', text: 'Oceania' },
  ];

  const onValidForm = (e) => {
    if (e) e.preventDefault();
    ValidForm();
  };

  return (
    <form className="form" onSubmit={onValidForm}>
      <Input
        placeholder="Search for a country"
        icon="search"
        iconPosition="left"
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
          onSelectChange(e.target.innerText.toLowerCase());
          if (e.target.innerText.toLowerCase() === 'all') {
            firstRequest();
          }
          requestByRegion()
        }}
      />
    </form>
  );
};
Form.propTypes = {
  onInputChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  onValidForm: PropTypes.func,
  requestByRegion: PropTypes.func,
  firstRequest: PropTypes.func,
  inputValue: PropTypes.string,
  selectValue: PropTypes.string,
};

Form.defaultProps = {
  onInputChange: () => { },
  onSelectChange: () => { },
  onValidForm: () => { },
  requestByRegion: () => { },
  firstRequest: () => { },
  inputValue: '',
  selectValue: '',
};

export default Form;
