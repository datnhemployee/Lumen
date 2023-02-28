import React from 'react';
import FullScreen from '../../components/screen/FullScreen';
import Text from '../../components/text';
type NotificationScreenProps = {};

const NotificationScreen: React.FunctionComponent<
  NotificationScreenProps
> = () => {
  return (
    <FullScreen>
      <Text type="h1-dark">Notification Screen</Text>
    </FullScreen>
  );
};
export default NotificationScreen;
