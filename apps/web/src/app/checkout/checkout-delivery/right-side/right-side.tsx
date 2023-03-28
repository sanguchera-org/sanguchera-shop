import { useRecoilValue } from 'recoil';
import { cartState } from '../../../store';
import { userState } from '../../../store/user/user.atom';
import './right-side.scss';

/* eslint-disable-next-line */
export interface RightSideProps {}

//Mostrar información del usuario

export function RightSide(props: RightSideProps) {
  const cart = useRecoilValue<any[]>(cartState);
  const user = useRecoilValue(userState);

  console.log(user);

  return (
    <div className="w-full mt-6 flex-row items-center justify-center">
      <div className="bg-gray-100 rounded-md">
        <table className="text-left w-full">
          <thead className="">
            <tr>
              <th className="p-3">Producto</th>
              <th className="p-3">Color</th>
              <th className="p-3 text-center">Cantidad</th>
              <th className="p-3 text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.product.id} className="border-white border-t-2">
                <td className="p-3">
                  <div className="flex">
                    <img src={item.product.images[0]} width={50} alt="" />
                    <h6 className="pl-2 self-center">{item.product.name}</h6>
                  </div>
                </td>
                <td className="p-3">{item.product.base_color}</td>
                <td className="p-3 text-center">{item.quantity}</td>
                <td className="p-3 text-center">
                  {(item.quantity * item.product.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-white border-t-2">
              <td></td>
              <td></td>
              <td className="text-center font-bold">Total</td>
              <td className="p-3 text-center">
                {cart
                  .reduce((a, b) => b.product.price * b.quantity + a, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <div className="mt-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nombres y apellidos
            </label>
            <input
              type="text"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="..."
              defaultValue={user != null ? user.displayName : ''}
            />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Correo
            </label>
            <input
              type="text"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="..."
              defaultValue={user != null ? user.email : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
