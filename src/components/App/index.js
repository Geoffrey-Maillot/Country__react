// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Form from 'src/components/Form';
import Countries from 'src/components/Countries';
import Country from 'src/components/Country';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Form />
    <Countries />
    <Country />
  </div>
);

// == Export
export default App;
