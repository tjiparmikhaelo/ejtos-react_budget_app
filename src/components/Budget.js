import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
      setNewBudget(event.target.value);
  }
  return (
    <div className='alert alert-secondary'>
        <span>Budget: {currency}{budget}</span> <br />
        {currency}
        <input style={{ marginLeft: '2px' }} type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};
export default Budget;
