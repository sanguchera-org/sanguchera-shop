import { Link } from 'react-router-dom';
import './checkout-delivery.scss';
import LeftSide from './left-side/left-side';
import RightSide from './right-side/right-side';
/* eslint-disable-next-line */
export interface CheckoutDeliveryProps {}

export function CheckoutDelivery(props: any) {
  return (
    <div className="flex justify-center ">
      <LeftSide />
      <div className="w-full p-5">
        <RightSide />
        <Link to="/checkout/payment">
          <button className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">
            Ir a Pagar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutDelivery;
