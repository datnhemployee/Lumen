import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import IMAGE from '../../../assets/image';
import Button from '../../../components/Button/Button';
import Text from '../../../components/Text';
import LANGUAGE from '../../../language';
import COLOR from '../../../utils/color';
import CONSTANTS from '../../../utils/constants';
import METRIC from '../../../utils/metric';
type MemberShipCardProps = {};

const MemberShipContent: React.FunctionComponent<MemberShipCardProps> = () => {
  return (
    <View style={styles.card}>
      <Text type="title3-light">{LANGUAGE.HOME.membership_title}</Text>

      <Text type="h1-light" style={styles.point}>
        {340}
      </Text>

      <View style={styles.progressTotal}>
        <View style={styles.progressDone} />
        <View style={styles.progressUndone} />
      </View>

      <Text type="paragraph1-light" style={styles.membershipMessage}>
        {LANGUAGE.HOME.membership_message}
      </Text>

      <Button style={styles.buttonViewBenefits}>
        <Text type="paragraph1-light" style={styles.buttonViewBenefitsTitle}>
          {LANGUAGE.HOME.view_tier_benefits}
        </Text>
        <Image source={IMAGE.CHEVRON_RIGHT} style={styles.iconViewBenefits} />
      </Button>

      <Button style={styles.buttonMyCoupon}>
        <Text type="button-dark">{LANGUAGE.HOME.my_coupons}</Text>
      </Button>

      <Text type="paragraph3-light" style={styles.updateDate}>
        {LANGUAGE.HOME.updated_date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: METRIC.HUGE,
    backgroundColor: COLOR.BACKGROUND,
    padding: METRIC.MEDIUM,
    borderRadius: METRIC.TINY,
    ...CONSTANTS.SHADOW_STYLE,
  },
  point: {
    marginTop: METRIC.TINY,
  },
  membershipMessage: {
    marginTop: METRIC.LARGE,
  },
  buttonViewBenefits: {
    flexDirection: 'row',
    marginTop: METRIC.SMALL,
  },
  buttonViewBenefitsTitle: {
    color: COLOR.PRIMARY,
  },
  iconViewBenefits: {
    tintColor: COLOR.PRIMARY,
  },
  buttonMyCoupon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: METRIC.RADIUS_BUTTON,
    backgroundColor: COLOR.SECONDARY,
    paddingVertical: METRIC.SMALL,
    marginTop: METRIC.MEDIUM,
  },
  updateDate: {
    marginTop: METRIC.SMALL,
    alignSelf: 'center',
  },

  progressTotal: {
    marginTop: METRIC.LARGE,
    height: METRIC.PROGRESS_HEIGHT,
    borderRadius: METRIC.PROGRESS_HEIGHT,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: COLOR.PROGRESS_BACKGROUND,
  },
  progressDone: {
    flex: 2,
    backgroundColor: COLOR.PRIMARY,
    borderRadius: METRIC.PROGRESS_HEIGHT,
  },
  progressUndone: {
    flex: 1,
  },
});

const MembershipCard: React.FC<MemberShipCardProps> = props => {
  return (
    <View>
      <View style={stylesForCard.hiddenContentWrapper}>
        <MemberShipContent />
      </View>

      <View style={StyleSheet.absoluteFill}>
        <View style={stylesForCard.topBackground} />
        <View style={stylesForCard.bottomBackground} />
      </View>

      <View style={[StyleSheet.absoluteFill, stylesForCard.content]}>
        <MemberShipContent />
      </View>
    </View>
  );
};

const stylesForCard = StyleSheet.create({
  wrapper: {},
  topBackground: {
    flex: 1,
    backgroundColor: COLOR.SECONDARY,
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },
  hiddenContentWrapper: {
    opacity: 0,
  },
  content: {
    marginHorizontal: METRIC.MEDIUM,
  },
});

export default MembershipCard;
