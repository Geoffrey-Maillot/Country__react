import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Where in the world?</h1>
    <div className="header__button">
      <Button icon="moon outline" className="header__button--button" content="Dark mode" />
    </div>
  </header>
);

export default Header;
