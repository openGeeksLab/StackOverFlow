import React from 'react';
import { FlatList } from 'react-native';
import TagsItem from '../tagsItem';
import styles from './styles';

const QuestionsList = (props) => {
  const { tags } = props;

  return (
        <FlatList
            style={styles.flatListCont}
            horizontal={true}
            data={tags}
            renderItem={info => (
                <TagsItem
                    title = {info.item}
                />
            )}
        />
  );
};

export default QuestionsList;
