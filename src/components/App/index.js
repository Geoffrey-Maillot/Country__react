// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'src/api';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Form from 'src/components/Form';
import Countries from 'src/components/Countries';
import Country from 'src/components/Country';
import NoFound from 'src/components/NoFound';
import Spinner from 'src/components/Spinner';

// == Composant
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [listCountry, setListCountry] = useState([]);
  const [loadind, setloading] = useState(true);
  const [error, setError] = useState(false);

  const firstRequest = async () => {
    setloading(true);
    setInputValue('');
    try {
      const allCountry = await axios.get('/all').then((response) => response.data);
      await setListCountry(allCountry);
      await setError(false);
      await setloading(false);
    } catch (er) {
      console.error(er);
      await setloading(false);
      return <Redirect to="/Countries-not-found" />;
    }
  };

  const requestByName = async () => {
    setloading(true);
    try {
      const allCountry = await axios.get(`/name/${inputValue}`).then((response) => response.data);
      await setListCountry(allCountry);
      await setError(false);
      await setloading(false);
    } catch (er) {
      console.error(er);
      setError(true);
      setloading(false);
    }
  };

  const requestByRegion = async () => {
    setloading(true);
    try {
      const allCountry = await axios
        .get(`/region/${selectValue}`)
        .then((response) => response.data);
      await setListCountry(allCountry);
      await setError(false);
      await setloading(false);
    } catch (er) {
      console.error(er);
      setloading(false);
      return <Redirect to="/Coutry-not-found" />;
    }
  };

  useEffect(() => {
    if (selectValue !== '') {
      setInputValue('');
      requestByRegion();
    }
  }, [selectValue]);

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
      <Header firstRequest={firstRequest} />
      {!loadind && (
        <>
          <Switch>
            <Route path="/" exact>
              <Form
                onInputChange={setInputValue}
                onSelectChange={setSelectValue}
                ValidForm={ValidForm}
                inputValue={inputValue}
                selectValue={selectValue}
                requestByRegion={requestByRegion}
                firstRequest={firstRequest}
                error={error}
              />
              <Countries listCountry={listCountry} />
            </Route>
            <Route path="/country/:countryName" exact>
              <Country listCountry={listCountry} />
            </Route>

            <Route>
              <NoFound />
            </Route>
          </Switch>
        </>
      )}
      {loadind && <Spinner />}
    </div>
  );
};

// == Export
export default App;
