import {
  put,
  all,
  call,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../utils/axios';

import {
  setQuestionsArray,
  getQuestionsArray,
  getDefaultOptions,
  setDefaultOptions,
  getPaginationQuestions,
  setPaginationQuestions,
  getSearch,
  setSearch,
  getSortOptions,
  setSortOptions,
} from '../actions';

function* getAllQuestions({ payload }) {
  try {
    const { data } = yield call(api.get, `/2.2/questions?page=${payload.page}&pagesize=20&fromdate=${payload.fromdate}&todate=${payload.todate}&order=${payload.order}&sort=${payload.sort}&site=stackoverflow`);
    yield put(setQuestionsArray(data));
  } catch (error) {
    
  }
}

function* getDefOpt() {
  let data = {
    page: '1',
    fromdate: '1559606400',
    todate: '1559692800',
    order: 'asc',
    sort: 'week',
  }
  try {
    yield put(setDefaultOptions(data))
  } catch(error) {

  }
}

function* getPagQ({ payload }) {
  let page = Number(payload.len)/Number(20) + Number(1);
  try {
    const { data } = yield call(api.get, `/2.2/questions?page=${page}&pagesize=20&fromdate=${payload.fromdate}&todate=${payload.todate}&order=${payload.order}&sort=${payload.sort}&site=stackoverflow`);
    yield put(setPaginationQuestions(data));
  } catch(error){

  }
}

function* SearchByTags({ payload }) {
  try {
    let data ={};
    if(payload.tag === ''){
      data  = yield call(api.get, `/2.2/questions?page=${payload.page}&pagesize=20&fromdate=${payload.fromdate}&todate=${payload.todate}&order=${payload.order}&sort=${payload.sort}&site=stackoverflow`);
    } else {
      data  = yield call(api.get, `/2.2/questions?page=${payload.page}&pagesize=20&fromdate=${payload.fromdate}&todate=${payload.todate}&order=${payload.order}&sort=${payload.sort}&tagged=${payload.tag}&site=stackoverflow`)
    }
    yield put(setSearch(data));
  } catch(error) {

  }
}

function* SetUpOptions({ payload }) {
  let data = payload;
  try {
    yield put(setSortOptions(data));
  } catch(error) {
    
  }
}

export default function* questionsSaga() {
  yield all([
    takeLatest(getQuestionsArray, getAllQuestions),
    takeLatest(getDefaultOptions, getDefOpt),
    takeLatest(getPaginationQuestions, getPagQ),
    takeLatest(getSearch, SearchByTags),
    takeLatest(getSortOptions, SetUpOptions),
  ]);
}
