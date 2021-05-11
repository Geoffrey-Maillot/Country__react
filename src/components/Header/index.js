import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './styles.scss';

const Header = ({ firstRequest, dark, useDarkMode }) => (
  <header className={classNames('header', { 'header-dark': dark, 'header-light': !dark })}>
    <Link to="/" className="header__title " onClick={firstRequest}>
      Where in the world?
    </Link>
    <div className="header__button ">
      <Button
        icon="moon outline"
        className="header__button--button"
        content="Dark mode"
        onClick={() => {
          useDarkMode(!dark);
        }}
      />
    </div>
  </header>
);

Header.propTypes = {
  firstRequest: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
  useDarkMode: PropTypes.func.isRequired,
};

export default Header;
