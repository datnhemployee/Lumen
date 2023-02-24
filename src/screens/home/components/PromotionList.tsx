import React from 'react';
import {Image, ImageProps, StyleSheet, View, FlatListProps} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Text from '../../../components/Text';
import {Promotion} from '../../../model/promotion';
import COLOR from '../../../utils/color';
import CONSTANTS from '../../../utils/constants';
import METRIC from '../../../utils/metric';

const PROMOTION_WIDTH_RATIO = 0.6;
const PROMOTION_WIDTH = Math.round(
  CONSTANTS.SCREEN_WIDTH * PROMOTION_WIDTH_RATIO,
);

type PromotionProps = {
  data: Promotion;
};

const PromotionItem: React.FunctionComponent<PromotionProps> = props => {
  const data = props.data;

  return (
    <View style={styles.wrapper}>
      <Image source={data.image} style={styles.image} />

      <View style={styles.body}>
        <Text type="title2" style={styles.title}>
          {data.title}
        </Text>
        <Text
          type="paragraph1-light"
          numberOfLines={CONSTANTS.NUMBER_LINES_PROMOTION}
          style={styles.message}>
          {data.message}
        </Text>

        <Text type="title2" style={styles.status}>
          {data.status}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: PROMOTION_WIDTH,
    borderRadius: METRIC.RADIUS_SMALL,
    backgroundColor: COLOR.BACKGROUND,
    overflow: 'hidden',
    marginBottom: METRIC.HUGE,
    ...CONSTANTS.SHADOW_STYLE,
  },
  image: {
    width: '100%',
    height: METRIC.PROMOTION_IMAGE_HEIGHT,
  },
  body: {
    padding: METRIC.SMALL,
  },
  title: {
    color: COLOR.PRIMARY,
  },
  message: {
    marginTop: METRIC.TINY,
  },
  status: {
    marginTop: METRIC.TINY,
    color: COLOR.PRIMARY,
  },
});

const renderPromotion: FlatListProps<Promotion>['renderItem'] = ({
  item,
  index,
}) => (
  <>
    {!index && <View style={stylesForPromotionItem.seperator} />}
    <PromotionItem data={item} />
    <View style={stylesForPromotionItem.seperator} />
  </>
);

type PromotionListProps = {
  data: Promotion[];
};

const PromotionList: React.FunctionComponent<PromotionListProps> = props => (
  <FlatList
    {...props}
    bounces={false}
    horizontal
    showsHorizontalScrollIndicator={false}
    data={props.data}
    renderItem={renderPromotion}
  />
);

const stylesForPromotionItem = StyleSheet.create({
  seperator: {width: METRIC.MEDIUM},
});

export default PromotionList;
