import { CADASTRACLIENTES_PAGE_TITLE_VALUE } from "../actions/actionTypes";

const initialState = {
  newValue: "Cadastre seus Clientes"
};

export const titleCadastraClientes = (state = initialState, action) => {
  switch (action.type) {
    case CADASTRACLIENTES_PAGE_TITLE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
