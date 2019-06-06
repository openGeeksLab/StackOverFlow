import React from 'react';
import { FlatList } from 'react-native';

import TagsItem from '../tagsItem';

const QuestionsList = (props) => {
  const { tags } = props;

  return (
        <FlatList
            style={{width: '100%', flexGrow: 0, flex: 0}}
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