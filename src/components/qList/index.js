import React from 'react';
import { FlatList } from 'react-native';
import QuestionsItem from '../qItem';
import styles from './styles';

const QuestionsList = (props) => {
  const { questions, options } = props;

  return (
        <FlatList
            style={styles.flatListCont}
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