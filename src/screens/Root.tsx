import React from 'react';
import TabNavigator from '../navigation/TabNavigator';
import StatusBar from '../components/statusBar';

type RootProps = {};

const Root: React.FunctionComponent<RootProps> = () => {
  return (
    <>
      <TabNavigator />
      <StatusBar />
    </>
  );
};
export default Root;
