import { titleCadastraClientes } from "./titleCadastraClientes";
import { titleCadastraImoveis } from "./titleCadastraImoveis";
import { combineReducers } from "redux";

// O COMBINE REDUCERS É O MÉTODO UTILIZADO PARA COMBINAR OS REDUCERS DA APLICAÇÃO E ENVIÁ-LOS À STORE.
export const Reducers = combineReducers({
  titleClientes: titleCadastraClientes,
  titleImoveis: titleCadastraImoveis
});
