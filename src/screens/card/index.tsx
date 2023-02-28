import React from 'react';
import FullScreen from '../../components/screen/FullScreen';
import Text from '../../components/text';
type CardScreenProps = {};

const CardScreen: React.FunctionComponent<CardScreenProps> = () => {
  return (
    <FullScreen>
      <Text type="h1-dark">Card Screen</Text>
    </FullScreen>
  );
};
export default CardScreen;
