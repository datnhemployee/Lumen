import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import Text from '../../../components/text';
import SIZE from '../../../utils/size';
type SectionProps = TextProps;

const Section: React.FunctionComponent<SectionProps> = props => {
  return (
    <Text type="title1-dark" style={[styles.title, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: SIZE.SPACE_MEDIUM,
  },
});

export default Section;
