import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      {count}
      <button onClick={() => dispatch({type: 'increase'})}>+</button>
      <button onClick={() => dispatch({type: 'decrease'})}>-</button>
    </div>
  );
};

export default Counter;