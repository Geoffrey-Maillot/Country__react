import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import './styles.scss';

const country = ({ listCountry }) => {
  const { countryName } = useParams();
  const Country = listCountry.find((item) => item.name === countryName);
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
  } = Country;
  return (
    <main className="country">
      <Link to="/">
        <div className="country__button">
          <Button content="Back" icon="left arrow" />
        </div>
      </Link>

      <div className="country__container-flex">
        <div className="container-flex--elem-img">
          <img src={flag} alt="carte" />
        </div>
        <div className="container-flex--elem-info">
          <h2 className="info-title">{name}</h2>
          <div className="info-container-flex">
            <div className="info-container-flex-left">
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="info-container-flex-right">
              <p>
                Top Level Domain:
                {topLevelDomain.map((domain) => (
                  <span key={domain}> {domain}</span>
                ))}
              </p>
              <p>
                Currencies:
                {currencies.map((currency) => (
                  <span key={currency.name}>{currency.name}</span>
                ))}
              </p>
              <p>
                Languages:
                {languages.map((language) => (
                  <span key={language.name}>{language.name}</span>
                ))}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries:</p>
            <ul className="border-countries__lists">
              {borders.map((border) => (
                <li className="border-countries__lists-elem" key={border}>
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

country.propTypes = {
  listCountry: PropTypes.array.isRequired,
};

export default country;
