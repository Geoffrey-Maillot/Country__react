import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'semantic-ui-react';
import './styles.scss';

const Form = ({
  onInputChange,
  onSelectChange,
  ValidForm,
  inputValue,
  selectValue,
  requestByRegion,
  firstRequest,
}) => {
  const regionOptions = [
    { key: 're', value: 'All', text: 'All' },
    { key: 'af', value: 'Africa', text: 'Africa' },
    { key: 'am', value: 'Americas', text: 'America' },
    { key: 'as', value: 'Asia', text: 'Asia' },
    { key: 'eu', value: 'Europe', text: 'Europe' },
    { key: 'oc', value: 'Oceania', text: 'Oceania' },
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
        color="black"
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
          onSelectChange(e.target.innerText);
          if (e.target.innerText.toLowerCase() === 'All') {
            firstRequest();
          }
          requestByRegion();
        }}
      />
    </form>
  );
};
Form.propTypes = {
  onInputChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  ValidForm: PropTypes.func,
  requestByRegion: PropTypes.func,
  firstRequest: PropTypes.func,
  inputValue: PropTypes.string,
  selectValue: PropTypes.string,
};

Form.defaultProps = {
  onInputChange: () => {},
  onSelectChange: () => {},
  ValidForm: () => {},
  requestByRegion: () => {},
  firstRequest: () => {},
  inputValue: '',
  selectValue: '',
};

export default Form;
