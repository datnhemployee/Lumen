import React from 'react';
import TabNavigator from '../navigation/TabNavigator';
import StatusBar from '../components/statusBar';

type RootProps = {};

const Root: React.FunctionComponent<RootProps> = () => {
  return (
    <>
      <StatusBar />
      <TabNavigator />
    </>
  );
};

export default Root;
