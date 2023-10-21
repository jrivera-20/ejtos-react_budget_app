import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css';

const Currency = (props) => {
  const [currency, setCurrency] = useState('');
  const { dispatch, currency: currentCurrency } = useContext(AppContext);

  // Set the initial currency value from the context when the component mounts
  useEffect(() => {
    setCurrency(currentCurrency);
  }, [currentCurrency]);

  const updateCurrency = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedCurrency,
    });
    setCurrency(selectedCurrency);
  };

  return (
    <div className='alert alert-success' style={{ backgroundColor: '#90EE90', padding: '10px' }}>
      <label style={{ marginLeft: '1rem', backgroundColor: '#90EE90', color: 'white' }}>
        Currency
        <select name='hover_color' id="currency" onChange={(event) => updateCurrency(event)} value={currency} style={{ backgroundColor: '#90EE90', color: 'white' }}>
          <option style={{ color: 'black' }} value="£">£ Pound</option>
          <option style={{ color: 'black' }} value="$">$ Dollar</option>
          <option style={{ color: 'black' }} value="€">€ Euro</option>
          <option style={{ color: 'black' }} value="₹">₹ Rupee</option>
        </select>
      </label>
    </div>
  );
};

export default Currency;