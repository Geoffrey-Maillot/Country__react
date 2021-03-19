import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = ({ firstRequest }) => (
  <header className="header">
    <Link to="/" className="header__title" onClick={firstRequest}>
      Where in the world?
    </Link>
    <div className="header__button">
      <Button icon="moon outline" className="header__button--button" content="Dark mode" />
    </div>
  </header>
);

Header.propTypes = {
  firstRequest: PropTypes.func.isRequired,
};

export default Header;
