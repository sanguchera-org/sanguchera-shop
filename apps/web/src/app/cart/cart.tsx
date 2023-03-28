import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartState } from '../store';
import CartList from './cart-list/cart-list';
import CartSummary from './cart-summary/cart-summary';
import './cart.scss';

export function Cart() {
  const cart = useRecoilValue(cartState);

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-xl font-bold mb-2">Tu Carrito</h1>
      {
        cart.length ?
        <p className="text-sm mb-4">
          Los artículos en tu carrito no están reservados. Termina el proceso de
          compra ahora para hacerte con ellos.
        </p> : ''
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          cart.length ?
          <>
            <CartList />
            <CartSummary />
          </>:        
          <section className="text-sm">
            <p className="font-bold">Tu carrito está vacío.</p>
            <p className="mb-4">
              Una vez que añadas algo a tu carrito, aparecerá aquí. ¿Listo para
              empezar?
            </p>
            <Link className="font-bold text-xl text-blue-500" to="/tienda">
            Comenzar {'>'}
            </Link>
          </section>
        }
      </div>
    </main>
  );
}

export default Cart;
