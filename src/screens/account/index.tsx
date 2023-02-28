import React from 'react';
import FullScreen from '../../components/screen/FullScreen';
import Text from '../../components/text';
type AccountScreenProps = {};

const AccountScreen: React.FunctionComponent<AccountScreenProps> = () => {
  return (
    <FullScreen>
      <Text type="h1-dark">Account Screen</Text>
    </FullScreen>
  );
};
export default AccountScreen;
