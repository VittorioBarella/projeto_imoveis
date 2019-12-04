import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Store } from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  /* O ESTADO DA STORE SE CONECTARÁ COM TODA A APLICAÇÃO,
    ATRAVÉS DO PROVIDER PATTERN, QUE POSSIBILITA QUE A STORE SEJA
    ACESSÍVEL A TODOS OS COMPONENTES ABAIXO DELE.
  */ 
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
