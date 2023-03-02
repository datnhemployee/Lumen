import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../components/button/Button';
import ButtonText from '../../../components/button/ButtonText';
import Icon from '../../../components/image/Icon';
import ProgressBar from '../../../components/progress/ProgressBar';
import Text from '../../../components/text';
import LANGUAGE from '../../../languages';
import COLOR from '../../../utils/color';
import SHADOW from '../../../utils/shadow';
import SIZE from '../../../utils/size';
type MemberShipContentProps = {};

const MemberShipContent: React.FunctionComponent<
  MemberShipContentProps
> = () => {
  return (
    <View style={styles.wrapper}>
      <Text type="title3-dark">{LANGUAGE.HOME.membership_card_title}</Text>

      <Text type="h1-dark" style={styles.point}>
        340
      </Text>

      <ProgressBar
        contentContainerStyle={styles.bar}
        flexDone={2}
        flexUndone={1}
      />

      <Text type="paragraph1-light">
        {LANGUAGE.HOME.membership_card_message}
      </Text>

      <Button style={styles.buttonViewBenefits}>
        <Text type="paragraph1-dark">{LANGUAGE.HOME.view_benefits_button}</Text>
        <Icon name="CHEVRON_RIGHT" size={SIZE.ICON_MEDIUM} />
      </Button>

      <ButtonText contentContainerStyle={styles.buttonViewMyCoupon}>
        {LANGUAGE.HOME.view_my_coupon}
      </ButtonText>

      <Text type="paragraph3-light" style={styles.textUpdatedDate}>
        {LANGUAGE.HOME.membership_updated_date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR.THIRD,
    padding: SIZE.SPACE_MEDIUM,
  },
  point: {
    marginTop: SIZE.SPACE_TINY,
  },
  bar: {
    marginVertical: SIZE.SPACE_MEDIUM,
  },
  buttonViewBenefits: {
    marginTop: SIZE.SPACE_SMALL,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonViewMyCoupon: {
    marginTop: SIZE.SPACE_MEDIUM,
  },
  textUpdatedDate: {
    marginTop: SIZE.SPACE_SMALL,
    alignSelf: 'center',
  },
});

type MemberShipCardProps = {};

const MemberShipCard: React.FunctionComponent<MemberShipCardProps> = () => {
  return (
    <View>
      <View style={cardStyles.hiddenCard}>
        <MemberShipContent />
      </View>

      <View style={cardStyles.background}>
        <View style={cardStyles.backgroundTop} />
        <View style={cardStyles.backgroundBottom} />
      </View>

      <View style={cardStyles.content}>
        <MemberShipContent />
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  hiddenCard: {
    opacity: 0,
  },
  background: {...StyleSheet.absoluteFillObject},
  backgroundTop: {flex: 1, backgroundColor: COLOR.SECONDARY},
  backgroundBottom: {flex: 1, backgroundColor: COLOR.BACKGROUND},
  content: {
    ...StyleSheet.absoluteFillObject,
    marginHorizontal: SIZE.SPACE_MEDIUM,
    borderRadius: SIZE.RADIUS_CARD,
    overflow: 'hidden',
    ...SHADOW,
  },
});

export default MemberShipCard;
