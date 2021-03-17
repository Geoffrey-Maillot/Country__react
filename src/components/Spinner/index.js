import React from 'react';
import './styles.scss';
import flag from 'src/assets/img/Flag-FR.gif';

const Spinner = () => (
  <div className="spinner">
    <img src={flag} alt="Flag-FR" />
  </div>
);

Spinner.propTypes = {};

export default Spinner;
