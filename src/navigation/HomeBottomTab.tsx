import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import SIZE from '../utils/size';
import HomeBottomIcon from './components/HomeBottomIcon';
import COLOR from '../utils/color';

const HomeBottomTab: React.FunctionComponent<BottomTabBarProps> = props => {
  return (
    <View style={styles.wrapper}>
      {props.state.routes.map((route, index) => (
        <HomeBottomIcon
          key={`${route.name}-icon`}
          {...{...props, route, index}}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZE.SPACE_SMALL,
    paddingHorizontal: SIZE.SPACE_MEDIUM,
    borderTopWidh: SIZE.BORDER,
    borderColor: COLOR.BORDER,
  },
});
export default HomeBottomTab;
