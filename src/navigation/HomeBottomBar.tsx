import React, {useContext} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Button from '../components/Button/Button';
import Text from '../components/Text';
import COLOR from '../utils/color';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import METRIC from '../utils/metric';
import NAVIGATION from '../utils/navigation';
import IMAGE from '../assets/image';
import {StatusBarContext} from '../context/StatusBarContext';

const selectIcon = (route: {name: string}) => {
  switch (route.name) {
    case NAVIGATION.HOME_STACK:
      return IMAGE.HOME;

    case NAVIGATION.NOTI_STACK:
      return IMAGE.NOTI;

    case NAVIGATION.CARD_STACK:
      return IMAGE.CARD;

    case NAVIGATION.ACCOUNT_STACK:
      return IMAGE.ACCOUNT;

    default:
      return IMAGE.HOME;
  }
};

const HomeBottomBar: React.FunctionComponent<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const statusBarContext = useContext(StatusBarContext);

  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const updateStatusBarStyle = () =>
          (statusBarContext.statusBarRef?.current as any)?.setBarStyle?.(
            route.name === NAVIGATION.HOME_STACK
              ? 'dark-content'
              : 'light-content',
          );

        const onPress = () => {
          updateStatusBarStyle();
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true} as any);
          }
        };

        const onLongPress = () => {
          updateStatusBarStyle();

          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            disabled={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Image
              style={[
                styles.icon,
                isFocused ? styles.iconFocus : styles.iconBlur,
              ]}
              source={selectIcon(route)}
            />

            {route.name === NAVIGATION.NOTI_STACK && (
              <View style={styles.notiDot} />
            )}
          </Button>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: METRIC.MEDIUM,
    paddingVertical: METRIC.SMALL,
    borderTopWidth: METRIC.BORDER,
    borderColor: COLOR.BORDER_BOTTOM_BAR,
    backgroundColor: COLOR.BACKGROUND,
  },
  icon: {
    height: METRIC.ICON_LARGE,
    width: METRIC.ICON_LARGE,
  },
  iconFocus: {tintColor: COLOR.PRIMARY},
  iconBlur: {tintColor: COLOR.BORDER},
  notiDot: {
    height: METRIC.DOT,
    width: METRIC.DOT,
    backgroundColor: COLOR.NOTI,
    position: 'absolute',
    top: METRIC.DOT / 3,
    right: METRIC.DOT / 2,
    borderRadius: METRIC.DOT,
  },
});

export default HomeBottomBar;
