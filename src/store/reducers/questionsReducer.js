import { createReducer } from 'redux-act';

import { setQuestionsArray, setPaginationQuestions, setSearch } from '../actions';

const initialState = {
  questions: [],
};

export default createReducer({
  [setQuestionsArray]: (state, data) => ({
    ...state,
    questions: data,
  }),

  [setPaginationQuestions]: (state, data) => {
    for(let i=0; i<20; i++){
      state.questions.items.push(data.items[i]);
    }

    return{
      questions: state.questions
    }
  },

  [setSearch]: (state, data) => {
    return {
      questions: data.data
    }
  },

}, initialState);