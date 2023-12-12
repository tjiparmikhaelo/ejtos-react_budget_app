import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value
    })
  };

  return (
    <div className='alert alert-secondary'> Currency {
          <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
            <option value="£">Uk(£)</option>
            <option value="₹">India(₹)</option>
            <option value="€">Europe(€)</option>
            <option value="CAD">Canada(CAD)</option>
        </select>	
      }	
    </div>
  );
};

export default Currency;
