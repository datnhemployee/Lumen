import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonBackTopLeft} from '../../components/button/ButtonBack';
import FullScreen from '../../components/screen/FullScreen';
import ScrollScreen from '../../components/screen/ScrollScreen';
import LANGUAGE from '../../languages';
import PROMOTION_LIST from '../../mock/promotion';
import Header from './components/Header';
import MemberShipCard from './components/MembershipCard';
import PromotionList from './components/PromotionList';
import Section from './components/Section';
import styles from './styles';
type HomeScreenProps = {};

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  return (
    <FullScreen>
      <ScrollScreen>
        <Header />
        <View style={styles.spaceHeaderAndMembershipCard} />
        <MemberShipCard />

        <Section>{LANGUAGE.HOME.petrol}</Section>
        <PromotionList data={PROMOTION_LIST.PETROL} />

        <Section>{LANGUAGE.HOME.rentalRebate}</Section>
        <PromotionList data={PROMOTION_LIST.RENTAL_REBATE} />

        <Section>{LANGUAGE.HOME.foodAndBeverage}</Section>
        <PromotionList data={PROMOTION_LIST.FOOD_AND_BEVERAGE} />

        <View style={styles.footer} />
      </ScrollScreen>

      <ButtonBackTopLeft />
    </FullScreen>
  );
};

export default HomeScreen;
