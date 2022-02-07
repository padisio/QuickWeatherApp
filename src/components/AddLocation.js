import React, { useState } from 'react';

import PropTypes from 'prop-types';


export const AddLocation = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // setCategories(cats =>[inputValue,...cats]);
      setCategories(cats => [inputValue]);
      setInputValue('');
    }

  }

  return <form onSubmit={handleSubmit}>ç
    <div className='row'>

      <div className='col-11'>

        <input className='form-control ' type='text'
          value={inputValue}
          onChange={handleInputChange}
        ></input>

      </div>

      <button className='btn btn-success col-1' type='submit' onClick={handleSubmit}>Buscar</button>

    </div>

  </form>;

};

AddLocation.propTypes = {
  setCategories: PropTypes.func.isRequired,
}