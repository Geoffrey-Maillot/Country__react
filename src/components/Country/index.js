import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-router-dom';
import './styles.scss';

const country = () => (
  <main className="country">
    <Button  />
    <div className="country__container-flex">
      <div className="container-flex--elem-img">
        <img src="https://restcountries.eu/data/deu.svg" alt="carte" />
      </div>
      <div className="container-flex--elem-info">
        <h2 className="info-title">Belgium</h2>
        <div className="info-container-flex">
          <div className="info-container-flex-left">
            <p>
              Native Name: <span>België</span>
            </p>
            <p>
              Population: <span>11,319,511</span>
            </p>
            <p>
              Region: <span>Europe</span>
            </p>
            <p>
              Sub Region: <span>Western Europe</span>
            </p>
            <p>
              Capital: <span>Brussels</span>
            </p>
          </div>
          <div className="info-container-flex-right">
            <p>
              Top Level Domain: <span>.be</span>
            </p>
            <p>
              Currencies: <span>Euro</span>
            </p>
            <p>
              Languages: <span>Dutch, French, German</span>
            </p>
          </div>
        </div>
        <div className="border-countries">
          <p>Border Countries:</p>
          <ul className="border-countries__lists">
            <li className="border-countries__lists-elem">France</li>
            <li className="border-countries__lists-elem">Germany</li>
            <li className="border-countries__lists-elem">Netherlands</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
);

country.propTypes = {};

export default country;
