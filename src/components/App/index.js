// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'src/api';

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

  useEffect(() => {
    firstRequest();
  }, []);

  const ValidForm = () => {
    console.log(inputValue);
    console.log(selectValue);
  };

  return (
    <div className="app">
      <Header />
      <Form
        onInputChange={setInputValue}
        onSelectChange={setSelectValue}
        ValidForm={ValidForm}
        inputValue={inputValue}
        selectValue={selectValue}
      />
      <Countries listCountry={listCountry} />
    </div>
  );
};

// == Export
export default App;
