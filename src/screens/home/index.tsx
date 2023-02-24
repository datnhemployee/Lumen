import React from 'react';
import {View} from 'react-native';
import ButtonBack, {
  withTopLeftWrapper,
} from '../../components/Button/ButtonBack';
import FullScreen from '../../components/Screen/FullScreen';
import ScrollScreen from '../../components/Screen/ScrollScreen';
import Text from '../../components/Text';
import LANGUAGE from '../../language';
import MOCK_PROMOTION_LIST from '../../mock/promotion';
import Header from './components/Header';
import MembershipCard from './components/MemberShipCard';
import PromotionList from './components/PromotionList';
import styles from './styles';

const TopLeftButtonBack = withTopLeftWrapper(ButtonBack);

type HomeProps = {};

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <FullScreen style={styles.screen}>
      <ScrollScreen>
        <Header />
        <MembershipCard />

        <View style={styles.promotionSectionWrapper}>
          <Text type="title1-light" style={styles.promotionTitle}>
            {LANGUAGE.HOME.petrol}
          </Text>
          <PromotionList data={MOCK_PROMOTION_LIST.PETROL} />

          <Text type="title1-light" style={styles.promotionTitle}>
            {LANGUAGE.HOME.rentalRebate}
          </Text>
          <PromotionList data={MOCK_PROMOTION_LIST.RENTAL_REBATE} />

          <Text type="title1-light" style={styles.promotionTitle}>
            {LANGUAGE.HOME.foodAndBeverage}
          </Text>
          <PromotionList data={MOCK_PROMOTION_LIST.FOOD_AND_BEVERAGE} />
        </View>
      </ScrollScreen>

      <TopLeftButtonBack onPress={() => {}} />
    </FullScreen>
  );
};

export default Home;
