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

      <div className='col-10'>

        <input className='form-control ' type='text'
          value={inputValue}
          onChange={handleInputChange}
        ></input>

      </div>

      <button className='btn btn-success col-2' type='submit' onClick={handleSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="24" className='iconoSvg' height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg></button>

    </div>

  </form>;

};

AddLocation.propTypes = {
  setCategories: PropTypes.func.isRequired,
}