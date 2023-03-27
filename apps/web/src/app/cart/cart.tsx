import { Link } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../store/user/user.atom';
import CartList from './cart-list/cart-list';
import CartSummary from './cart-summary/cart-summary';
import './cart.scss';

export function Cart() {
  const user = useRecoilValue(userState);

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-xl font-bold mb-2">Tu Carrito</h1>
      <p className="text-sm mb-4">
        Los artículos en tu carrito no están reservados. Termina el proceso de
        compra ahora para hacerte con ellos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CartList />
        <CartSummary />
        <Link
          className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          to={user != null ? '/checkout/delivery' : ''}
        >
          Checkout
        </Link>
      </div>
    </main>
  );
}

export default Cart;
