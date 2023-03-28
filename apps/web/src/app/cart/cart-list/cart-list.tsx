import { useRecoilState } from 'recoil';
import { cartState } from '../../store';
import './cart-list.scss';

export function CartList() {
  const [cart, setCart] = useRecoilState(cartState);

  const onQuantityChange = (value: string, index: number) => {
    const item = Object.assign({}, cart[index]);
    const items = Object.assign([], cart);

    const valueNumber = parseInt(value);
    item.quantity = isNaN(valueNumber) ? 1 : valueNumber;
    items.splice(index, 1, item);

    setCart(items);
  };

  const onRemoveItem = (index: number) => () => {
    const items = Object.assign([], cart);
    items.splice(index, 1);

    setCart(items);
  };

  return (
    <section className="flex flex-col border rounded p-6">
      <h3 className="text-xl font-semibold leading-5 text-gray-800 mb-6">Productos</h3>

      {cart.map((item, index) => (
        <article
          key={item.product.id}
          className="grid grid-cols-4 gap-4 border rounded-sm mb-4"
        >
          <section className="col-span-1 p-4">
            <img
              className="h-20 w-20 rounded-md object-cover object-center"
              src={item.product.images[0]}
              alt="Producto"
            />
          </section>
          <section className="col-span-2">
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">{item.product.name}</span>
              <p className="mt-auto text-lg font-bold">
                S/. {item.product.price.toFixed(2)}
              </p>
              <button
                className="w-min text-sm text-red-500"
                onClick={onRemoveItem(index)}
              >
                Eliminar
              </button>
            </div>
          </section>
          <section className="col-span-1 p-4">
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={item.quantity}
              min={1}
              onChange={(e) => onQuantityChange(e.target.value, index)}
            />
          </section>
        </article>
      ))}
    </section>
  );
}

export default CartList;
