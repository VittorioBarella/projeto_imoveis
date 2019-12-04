import { CADASTRAIMOVEIS_PAGE_TITLE_VALUE } from "../actions/actionTypes";
const initialState = {
  newValue: "Cadastre seus Imóveis"
};

export const titleCadastraImoveis = (state = initialState, action) => {
  switch (action.type) {
    case CADASTRAIMOVEIS_PAGE_TITLE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
