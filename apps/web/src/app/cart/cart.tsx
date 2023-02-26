import CartList from './cart-list/cart-list';
import CartSummary from './cart-summary/cart-summary';
import './cart.scss';

export function Cart() {
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
      </div>
    </main>
  );
}

export default Cart;
