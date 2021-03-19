import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <header className="header">
    <Link exact to="/" className="header__title">
      Where in the world?{' '}
    </Link>
    <div className="header__button">
      <Button icon="moon outline" className="header__button--button" content="Dark mode" />
    </div>
  </header>
);

export default Header;
