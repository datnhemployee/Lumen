import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
type ListProps<T> = FlatListProps<T>;

const List: React.FunctionComponent<ListProps<any>> = props => {
  return (
    <FlatList
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
};
export default List;
