import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Button } from 'semantic-ui-react';

const NoFound = () => (
  <main className="no-found">
    <Link to="/">
      <div className="country__button">
        <Button content="Back" icon="left arrow" />
      </div>
    </Link>
    <h1 className="no-found__title">Ce pays n'existe pas...</h1>
  </main>
);

export default NoFound;
