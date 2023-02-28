import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonBackTopLeft} from '../../components/button/ButtonBack';
import FullScreen from '../../components/screen/FullScreen';
import ScrollScreen from '../../components/screen/ScrollScreen';
import Header from './components/Header';
import MemberShipCard from './components/MembershipCard';
import styles from './styles';
type HomeScreenProps = {};

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  return (
    <FullScreen>
      <ScrollScreen>
        <Header />
        <View style={styles.spaceHeaderAndMembershipCard} />
        <MemberShipCard />
      </ScrollScreen>

      <ButtonBackTopLeft />
    </FullScreen>
  );
};

export default HomeScreen;
