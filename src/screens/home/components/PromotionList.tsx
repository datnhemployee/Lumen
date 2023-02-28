import React from 'react';
import {FlatListProps, Image, StyleSheet, View} from 'react-native';
import List from '../../../components/list';
import SIZE from '../../../utils/size';
import {Promotion} from '../../../models/promotion';
import COLOR from '../../../utils/color';
import Text from '../../../components/text';
import CONSTANTS from '../../../utils/constants';

const PROMOTION_WIDTH = 0.6 * CONSTANTS.SCREEN.WIDTH;

type PromotionProps = {
  data: Promotion;
};
/**
 * @todo Based on my experience, I should use `react-native-render-html` but I use React Native Component for quick demo.
 */
const PromotionItem: React.FunctionComponent<PromotionProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={props.data?.image} style={styles.image} />

      <View style={styles.content}>
        <Text type="title2-dark" style={styles.title}>
          {props.data?.title}
        </Text>
        <Text
          type="paragraph1-dark"
          style={styles.message}
          numberOfLines={
            !!props.data?.subMessage
              ? CONSTANTS.NUM_OF_LINES.PROMOTION.WITH_SUB_MESSAGE
              : CONSTANTS.NUM_OF_LINES.PROMOTION.WITHOUT_SUB_MESSAGE
          }>
          {props.data?.message}
        </Text>

        {!!props.data?.subMessage && (
          <Text
            type="paragraph1-dark"
            style={styles.subMessage}
            numberOfLines={CONSTANTS.NUM_OF_LINES.PROMOTION.SUB_MESSAGE}>
            {props.data?.subMessage}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: SIZE.RADIUS_CARD,
    backgroundColor: COLOR.WHITE,
    width: PROMOTION_WIDTH,
    overflow: 'hidden',
    marginBottom: SIZE.SPACE_MEDIUM,
  },

  image: {
    height: SIZE.PROMOTION_HEIGHT,
    width: '100%',
  },

  content: {
    padding: SIZE.SPACE_SMALL,
  },
  title: {},
  message: {
    marginTop: SIZE.SPACE_SMALL,
    color: COLOR.TEXT_GREY_2,
  },
  subMessage: {
    marginTop: SIZE.SPACE_SMALL,
    color: COLOR.PRIMARY,
  },
});

type PromotionListProps = {
  data: Promotion[];
};

/**
 * @todo Should use `SectionList` for instead. Just use `Flatlist` to make quick demo.
 */
const PromotionList: React.FunctionComponent<PromotionListProps> = props => {
  const renderPromotion: FlatListProps<Promotion>['renderItem'] = ({
    item,
    index,
  }) => (
    <>
      {!index && <View style={stylesList.divider} />}
      <PromotionItem data={item} />
      <View style={stylesList.divider} />
    </>
  );

  return (
    <List
      data={props.data}
      renderItem={renderPromotion}
      keyExtractor={item => item?.key}
    />
  );
};

const stylesList = StyleSheet.create({
  divider: {
    width: SIZE.SPACE_MEDIUM,
  },
});

export default PromotionList;
