import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedSelector } from '../../store/app/app.selector';
import { summaryCartSelector } from '../../store/cart/cart.selector';
import './cart-summary.scss';

export function CartSummary() {
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const summary = useRecoilValue(summaryCartSelector)
  const navigate = useNavigate()
  
  const onCheckout = () => {
    if (!isAuthenticated){
      alert('Debe autenticarse para proceder con la compra.')
      handleSignIn()
    } else {
      navigate('/checkout/delivery')
    }
  }

  const handleSignIn = () => {
    searchParams.set('abrir', 'ingresar');
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6 rounded">
        <h3 className="text-xl font-semibold leading-5 text-gray-800">Resumen</h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                <p className="text-base leading-4 text-gray-600">S/ {summary.subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-base leading-4 text-gray-800">Descuento</p>
                <p className="text-base leading-4 text-gray-600">S/ {summary.discount.toFixed(2)} (0%)</p>
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="text-base leading-4 text-gray-800">Envio</p>
                <p className="text-base leading-4 text-gray-600">S/ {summary.shipping.toFixed(2)}</p>
            </div>
        </div>
        <div className="flex justify-between items-center w-full">
            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-base font-semibold leading-4 text-gray-600">S/ {summary.total.toFixed(2)}</p>
        </div>
        <button
          className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
          onClick={onCheckout}
        >
          Checkout
        </button>
        <Link
          className="py-2 px-4 flex justify-center border hover:bg-gray-700 hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          to={ '/tienda' }
        >
          Seguir comprando
        </Link>
    </div>
  );
}

export default CartSummary;
