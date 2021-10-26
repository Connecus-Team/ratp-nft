import produce from 'immer';
import constants from './Banner.Constants';

const initialState = {
  web3: null,
};

export const landingPageReducer =(state = initialState, {type, payload}) =>
  produce(state, (draft) => {
    switch (type) {
      case constants.SET_WEB3:
        draft.web3 = payload;
        break;
      case constants.SET_WEB3_ERROR:
        draft.web3 = null;
        break;
      default:
        return state;
    }
  });
export default landingPageReducer;

