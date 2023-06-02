import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(counterActions.inc());
  };
  const dec = () => {
    dispatch(counterActions.dec());
  };
  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default Counter;
