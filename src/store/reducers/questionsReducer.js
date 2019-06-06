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
    console.log('State>>>', state)
    console.log('Data>>>>', data);
    for(let i=0; i<20; i++){
      state.questions.items.push(data.items[i]);
    }

    return{
      questions: state.questions
    }
  },

  [setSearch]: (state, data) => {
    console.log('in reducer, here data>', data);
    return {
      questions: data.data
    }
  },

}, initialState);