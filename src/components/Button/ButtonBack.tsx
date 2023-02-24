import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IMAGE from '../../assets/image';
import METRIC from '../../utils/metric';
import Button, {ButtonProps} from './Button';
import COLOR from '../../utils/color';

type ButtonBackProps = {
  onPress?: ButtonProps['onPress'];
};

const ButtonBack: React.FunctionComponent<ButtonBackProps> = props => {
  const navigation = useNavigation();

  return (
    <Button style={styles.button} onPress={props?.onPress ?? navigation.goBack}>
      <Image source={IMAGE.CHEVRON_LEFT} style={styles.icon} />
    </Button>
  );
};

const withTopLeftWrapper =
  (ButtonBackComp: typeof ButtonBack) => (props: ButtonBackProps) =>
    (
      <>
        <View style={styles.topLeftWrapper}>
          <ButtonBackComp {...props} />
        </View>
      </>
    );

const styles = StyleSheet.create({
  topLeftWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: METRIC.MEDIUM,
    marginLeft: METRIC.MEDIUM,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BACKGROUND,
    borderRadius: METRIC.MEDIUM,
    height: METRIC.SMALL + METRIC.TINY * 2 /** padding */,
    width: METRIC.SMALL + METRIC.TINY * 2 /** padding */,
  },
  icon: {
    height: METRIC.SMALL,
    width: METRIC.SMALL,
  },
});
const BUTTON_BACK_SIZE =
  styles.button.height + styles.topLeftWrapper.marginTop - 5;

export default ButtonBack;
export {withTopLeftWrapper, BUTTON_BACK_SIZE};
