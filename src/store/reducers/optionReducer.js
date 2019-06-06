import { createReducer } from 'redux-act';

import { setDefaultOptions, setSortOptions } from '../actions';

const initialState = {
  options: [],
};

export default createReducer({
  [setDefaultOptions]: (state, data) => ({
    ...state,
    options: data,
  }),

  [setSortOptions]: (state, data) => ({
    ...state,
    options: data,
  })
}, initialState);