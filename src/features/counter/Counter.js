import React from "react";

import {useSelector, useDispatch} from "react-redux";
import {actions} from "./counterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      <button onClick={() => dispatch(actions.increaseByAmount(5))}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
