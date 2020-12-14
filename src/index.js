import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import reducer from "./redux/reducers";
import {createStore,applyMiddleware} from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { watchAddAction, watchDecrementAction, watchIncrementAction } from './redux/saga/counter.action';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchIncrementAction)
sagaMiddleware.run(watchDecrementAction)
sagaMiddleware.run(watchAddAction)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
