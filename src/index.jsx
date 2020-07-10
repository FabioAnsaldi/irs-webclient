import React from "react";
import ReactDOM from "react-dom";

import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale-provider/pt_BR";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import createSagaMiddleware from "redux-saga";
//import rootSaga from "./sagas";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import combiner from "./combiner/combiner";
import Main from "./theme/components/main/index";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddlaware = createSagaMiddleware();
const store = applyMiddleware(multi, thunk, promise, sagaMiddlaware)(
  createStore
)(combiner, devTools);

//sagaMiddlaware.run(rootSaga);

ReactDOM.render(
  <ConfigProvider locale={ptBR}>
    <Provider store={store}>
      <Main />
    </Provider>
  </ConfigProvider>,
  document.getElementById("app")
);
