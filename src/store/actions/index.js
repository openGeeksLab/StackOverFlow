import { createAction } from 'redux-act';

export const setQuestionsArray = createAction('Set Questions Array');
export const getQuestionsArray = createAction('Get Questions Array');

export const setPaginationQuestions = createAction('Set Pagination Questions');
export const getPaginationQuestions = createAction('Get Pagination Questions');

export const setDefaultOptions = createAction('Set Default Options');
export const getDefaultOptions = createAction('Get Default Options');

export const getSearch = createAction('Get Search');
export const setSearch = createAction('Set Search');

export const getSortOptions = createAction('Get Search Options');
export const setSortOptions = createAction('Set Search Options');