import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BUTTON_BACK_SIZE} from '../../../components/Button/ButtonBack';
import Text from '../../../components/Text';
import LANGUAGE from '../../../language';
import COLOR from '../../../utils/color';
import METRIC from '../../../utils/metric';
type HeaderProps = {};

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.spaceForButtonBack} />

      <Text type="h3-dark" style={styles.title}>
        {LANGUAGE.HOME.title}
      </Text>
      <Text type="paragraph1-dark">{LANGUAGE.HOME.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR.SECONDARY,
    paddingHorizontal: METRIC.MEDIUM,
  },
  spaceForButtonBack: {
    height: BUTTON_BACK_SIZE,
  },
  title: {
    marginTop: METRIC.SMALL,
  },
  message: {
    marginTop: METRIC.TINY,
  },
});

export default Header;
