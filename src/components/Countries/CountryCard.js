import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardDescription, CardHeader, Image } from 'semantic-ui-react';
import './styles.scss';

const CountryCard = ({ name, population, region, capital, flag }) => (
  <Card>
    <Image src={flag} />
    <CardContent>
      <CardHeader>{name}</CardHeader>
      <CardDescription>
        <strong>Population:</strong>
        {population}
      </CardDescription>
      <CardDescription>
        <strong>Region:</strong> {region}
      </CardDescription>
      <CardDescription>
        <strong>Capital:</strong> {capital}
      </CardDescription>
    </CardContent>
  </Card>
);

CountryCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  flag: PropTypes.string,
};

CountryCard.defaultProps = {
  name: '',
  population: null,
  region: '',
  capital: '',
  flag: '',
};

export default CountryCard;
