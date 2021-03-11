import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Form = () => (
  <form className="form">
    <input className="form__input" type="text" placeholder="Search for a country..." />
    <select className="form__select" name="region">
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </form>
);
Form.propTypes = {};

export default Form;
