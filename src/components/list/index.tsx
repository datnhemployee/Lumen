import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
type ListProps<T> = FlatListProps<T>;

const List: React.FunctionComponent<ListProps<any>> = props => (
  <FlatList horizontal showsHorizontalScrollIndicator={false} {...props} />
);
export default List;
