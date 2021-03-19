import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import CountryCard from './CountryCard';
import './styles.scss';

const Countries = ({ listCountry }) => (
  <Card.Group itemsPerRow={4} stackable doubling>
    {listCountry.map((country) => (
      <CountryCard key={country.name} {...country} />
    ))}
  </Card.Group>
);
Countries.propTypes = {
  listCountry: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Countries;
