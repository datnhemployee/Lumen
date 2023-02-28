import React from 'react';
import {FlatListProps, StyleSheet, View} from 'react-native';
import List from '../../../components/list';
import SIZE from '../../../utils/size';
import {Promotion} from '../../../models/promotion';
import COLOR from '../../../utils/color';

type PromotionProps = {
  data: Promotion;
};

const Promotion: React.FunctionComponent<PromotionProps> = () => {
  return <View style={styles.wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: SIZE.RADIUS_CARD,
    backgroundColor: COLOR.WHITE,
  },
});

type PromotionListProps = {
  data: Promotion[];
};

const PromotionList: React.FunctionComponent<PromotionListProps> = props => {
  const renderPromotion: FlatListProps<Promotion>['renderItem'] = ({
    item,
    index,
  }) => <Promotion data={item} />;

  return <List data={props.data} renderItem={renderPromotion} />;
};
export default PromotionList;
