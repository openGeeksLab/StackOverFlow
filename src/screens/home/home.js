import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import QuestionList from '../../components/qList';
import Header from '../../components/Header';

import {
  getQuestionsArray,
  getDefaultOptions,
  getPaginationQuestions
} from '../../store/actions';

class Home extends Component{

  render() {
    return(
      <View>
        <Header />
        <QuestionList
          onGetPagination={this.props.onGetPagination}
          questions={this.props.questions}
          options={this.props.options}
          goToFull={this.props.goToFull}
        />
      </View>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    questions: state.questionsArray.questions,
    // options: state.options.options,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetQuestionsArray: () => dispatch(getQuestionsArray({
    page: '1',
    fromdate: '1559606400',
    todate: '1559692800',
    order: 'asc',
    sort: 'week',
  })),
  onGetDefaultOptions: () => dispatch(getDefaultOptions()),
  onGetPagination: (options)  => dispatch(getPaginationQuestions(options)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);