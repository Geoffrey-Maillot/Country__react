import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Countries = () => (
  <main className="countries">
    <div className="country">
      <div className="country__img">
        <img src="https://restcountries.eu/data/deu.svg" alt="carte" />
      </div>

      <div className="country__name">Germany</div>
      <div className="country__info">
        <p>
          Population: <span>81,770,900</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </div>
  </main>
);
Countries.propTypes = {};

export default Countries;
