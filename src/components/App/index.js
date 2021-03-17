// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'src/api';
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Form from 'src/components/Form';
import Countries from 'src/components/Countries';
import Country from 'src/components/Country';

// == Composant
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('region');
  const [listCountry, setListCountry] = useState([]);

  const firstRequest = async () => {
    const allCountry = await axios.get('/all').then((response) => response.data);
    await setListCountry(allCountry);
  };

  const requestByName = async () => {
    const allCountry = await axios.get(`/name/${inputValue}`).then((response) => response.data);
    await setListCountry(allCountry);
  };

  const requestByRegion = async () => {
    const allCountry = await axios.get(`/region/${selectValue}`).then((response) => response.data);
    await setListCountry(allCountry);
  };

  const onClickSearch = (name) => {
    setInputValue(name);
    requestByName();
  };

  useEffect(() => {
    firstRequest();
  }, []);

  const ValidForm = () => {
    if (inputValue === '') {
      firstRequest();
    }
    requestByName();
  };

  return (
    <div className="app">
      <Header />
      <Route path="/" exact>
        <Form
          onInputChange={setInputValue}
          onSelectChange={setSelectValue}
          ValidForm={ValidForm}
          inputValue={inputValue}
          selectValue={selectValue}
          requestByRegion={requestByRegion}
          firstRequest={firstRequest}
        />
        <Countries listCountry={listCountry} onClickSearch={onClickSearch} />
      </Route>
      <Route path="/country/:countryName" exact>
        <Country listCountry={listCountry} />
      </Route>
    </div>
  );
};

// == Export
export default App;
