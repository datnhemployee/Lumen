import {Promotion} from '../models/promotion';
import IMAGE from '../utils/image';

const PROMOTION_LIST: {[k: string]: Promotion[]} = {
  PETROL: [
    {
      image: IMAGE.PETROL_1,
      title: '15 Coins',
      message: '50% discount for every $100 top-up on your Shell Petrol Card',
    },
    {
      image: IMAGE.PETROL_2,
      title: '1,000 Coins',
      message: '70% discount top-up on your Shell Petrol Card',
      subMessage: 'Insufficient coins',
    },
  ],
  RENTAL_REBATE: [
    {
      image: IMAGE.RENTAL_REBATE_1,
      title: '20 Coins',
      message: 'Get $20 Rental rebate',
    },
    {
      image: IMAGE.RENTAL_REBATE_2,
      title: '15 Coins',
      message: 'Get $500 Rental rebate',
    },
  ],
  FOOD_AND_BEVERAGE: [
    {
      image: IMAGE.FOOD_AND_BEVERAGE_1,
      title: '25 Coins',
      message: 'NTUC Fairprice $50 Voucher',
    },
    {
      image: IMAGE.FOOD_AND_BEVERAGE_2,
      title: '5 Coins',
      message: 'Free Cold Stone Sundae at any flavour!',
    },
  ],
};
export default PROMOTION_LIST;
