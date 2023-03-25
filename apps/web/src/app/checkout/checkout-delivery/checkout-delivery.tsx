import './checkout-delivery.scss';
import LeftSide from './left-side/left-side';
import RightSide from './right-side/right-side';
/* eslint-disable-next-line */
export interface CheckoutDeliveryProps {}

export function CheckoutDelivery(props: any) {
  return (
    <div className="flex justify-center ">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default CheckoutDelivery;
