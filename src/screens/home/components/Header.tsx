import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {SpaceTopLeftButtonBack} from '../../../components/button/ButtonBack';
import Text from '../../../components/text';
import EN from '../../../languages/en';
import COLOR from '../../../utils/color';
import SIZE from '../../../utils/size';
type HeaderProps = ViewProps;

const Header: React.FunctionComponent<HeaderProps> = props => {
  return (
    <View style={styles.wrapper}>
      <SpaceTopLeftButtonBack />

      <View style={styles.wrapperContent}>
        <Text type="h3-light" style={styles.title}>
          {EN.HOME.title}
        </Text>
        <Text type="paragraph1-light" style={styles.message}>
          {EN.HOME.message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR.SECONDARY,
  },
  wrapperContent: {
    paddingHorizontal: SIZE.SPACE_MEDIUM,
  },
  title: {
    marginTop: SIZE.SPACE_SMALL,
  },
  message: {
    marginVertical: SIZE.SPACE_TINY,
  },
});

export default Header;
