// A STORE É A ONDE SE DIZ QUAIS SÃO OS REDUCERS DA APLICAÇÃO.
import { createStore } from "redux";
import { Reducers } from "../reducers";

export const Store = createStore(Reducers);
