import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Button from '../../components/button/Button';
import NAVIGATION from '../../utils/navigation';
import IMAGE from '../../utils/image';
import Icon from '../../components/image/Icon';
import SIZE from '../../utils/size';
import {StyleSheet, View} from 'react-native';
import NotificationDot from '../../components/dot/NotificationDot';
import COLOR from '../../utils/color';

const getIcon = (route: {name: string}) => {
  switch (route?.name) {
    case NAVIGATION.NOTIFICATION_STACK:
      return IMAGE.NOTIFICATION;

    case NAVIGATION.ACCOUNT_STACK:
      return IMAGE.ACCOUNT;

    case NAVIGATION.CARD_STACK:
      return IMAGE.CARD;

    case NAVIGATION.HOME_SCREEN:
    default:
      return IMAGE.HOME;
  }
};

type HomeBottomIconProps = BottomTabBarProps & {
  route: {key: string; name: string};
  index: number;
};

const HomeBottomIcon: React.FunctionComponent<HomeBottomIconProps> = props => {
  const index = props?.index;
  const route = props?.route;
  const isFocused = props.state.index === index;
  const navigation = props.navigation;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (isFocused || event.defaultPrevented) return;

    navigation.navigate(route.name);
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <Button
      style={styles.button}
      disabled={isFocused}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon
        source={getIcon(route)}
        size={SIZE.ICON_LARGE}
        style={isFocused ? styles.iconFocus : styles.iconBlur}
      />

      {route.name === NAVIGATION.NOTIFICATION_STACK && (
        <View style={styles.notificationDot}>
          <NotificationDot />
        </View>
      )}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'visible',
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: SIZE.DOT / 2,
    marginTops: SIZE.DOT / 2,
  },
  iconFocus: {
    tintColor: COLOR.PRIMARY,
  },
  iconBlur: {
    tintColor: COLOR.BORDER,
  },
});

export default HomeBottomIcon;
