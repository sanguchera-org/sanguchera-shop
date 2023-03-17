import { environment } from '../../../environments/environment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Product } from '../../models';
import { Cart } from '../../models/cart';
import { cartState } from '../../store';

export function ProductsList() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [cart, setCart] = useRecoilState<Cart>(cartState);

  const addToCart = (product: Product) => (e: any) => {
    e.preventDefault();
    const index = cart.findIndex((item) => item.product.id === product.id);
    const items = Object.assign([], cart);

    if (index >= 0) {
      const item = Object.assign({}, cart[index]);
      item.quantity = item.quantity + 1;
      items.splice(index, 1, item);
    } else {
      items.push({ product, quantity: 1 });
    }

    setCart(items);
  };

  useEffect(() => {
    const getProducts = async () => {
      await axios.get(`${environment.apiUrl}/product/all`).then((res) => {
        setProducts(res.data);
      });
    };
    getProducts();
  }, []);
  return (
    <div className="max-w-2xl mx-auto">
      {products.map((product) => (
        <Link key={product.id} to={product.id}>
          <div className="flex bg-white rounded-lg shadow my-6">
            <div className="relative flex-none w-24 md:w-48">
              <img
                src={product.images[0]}
                alt="Producto"
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold ">
                  {product.name}
                </h1>
                <div className="text-xl font-semibold text-gray-500 ">
                  S/. {product.price.toFixed(2)}
                </div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 ">
                  In stock:
                  <span className="text-lg font-bold ml-2 text-cyan-800">
                    {product.stock}
                  </span>
                </div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 ">
                  Base color:
                  <span className="text-lg font-bold ml-2 text-cyan-800">
                    {product.base_color}
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="my-3">
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="flex mb-4 text-sm font-medium">
                <button
                  type="button"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={addToCart(product)}
                >
                  Buy now
                </button>
              </div>
              <p className="text-sm text-gray-500 "></p>
            </form>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductsList;
