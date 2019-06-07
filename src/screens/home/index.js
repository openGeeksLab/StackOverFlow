import React, { Component } from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import {
  getQuestionsArray,
  getDefaultOptions,
  getPaginationQuestions
} from '../../store/actions';

import Home from './home';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.onGetQuestionsArray();
    this.props.onGetDefaultOptions();
  }

  goToFull = (data) => {this.props.navigation.navigate('FullView',{
    data: data
  })}

  render() {
    return (
      <Home 
        onGetQuestions={this.props.onGetQuestionsArray}
        onGetPagination={this.props.onGetPagination}
        options={this.props.options}
        questions={this.props.questions}
        goToFull={this.goToFull}
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    options: state.options.options,
    questions: state.questionsArray.questions,
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
  onGetPagination: () => dispatch(getPaginationQuestions(this.props.options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
