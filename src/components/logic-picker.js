import React from 'react';
import 'react-dropdown/style.css';

function LogicPicker(props) {
  const { op, field } = props;

  const chng = (e) => {
    props.setter(e.target.value);
  };

  return (
    <>
      <select name={field} id={`${field}-logic`} aria-label="Select search logic" value={op} onChange={chng}>
        <option value=" "> </option>
        <option value="+">✅</option>
        <option value="-">🚫</option>
      </select>
    </>
  );
}

export default LogicPicker;
