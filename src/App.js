import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_REQ, INCREMENT_REQ ,DECREMENT_REQ,INCREMENT_ASYN_REQ} from "./redux/actionTypes";

export default function App() {
  const dispatch = useDispatch();
  const action = (type,payload)=>dispatch({type,payload})
  const counterReducer = useSelector(({ counterReducer }) => counterReducer);
  return (
    <div>
      <button onClick={() => action(INCREMENT_ASYN_REQ)}>
        Increment after 2 second
      </button>
      <button onClick={() => action(INCREMENT_REQ)}>Increment + </button>
      <button onClick={() => action(DECREMENT_REQ)}>Decrement - </button>
      <button onClick={() => action(ADD_REQ,10)}>Add</button>
      <hr />
      <div>Clicked: {counterReducer.count}</div>
    </div>
  );
}
