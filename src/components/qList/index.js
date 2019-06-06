import React from 'react';
import { FlatList } from 'react-native';

import QuestionsItem from '../qItem';

const QuestionsList = (props) => {
  const { questions, options } = props;

  return (
        <FlatList
            style={{width: '100%', backgroundColor: '#6495ED',}}
            onEndReached={() => {
                options.len = questions.items.length
                props.onGetPagination(options)
            }}
            data={questions.items}
            renderItem={info => (
                <QuestionsItem
                    goToFull = {props.goToFull}
                    item = {info.item}
                />
            )}
        />
  );
};

export default QuestionsList;