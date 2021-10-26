import {createSelector} from 'reselect';

const selectRaw = (state) => state.banner;

const selectWeb3 = createSelector(
    [selectRaw],
    (banner) => banner.web3,
);
const selectors = {
  selectWeb3,
};

export default selectors;
