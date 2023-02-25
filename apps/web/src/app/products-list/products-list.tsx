import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil'
import { Product } from '../models';
import { cartState } from '../store';

/* eslint-disable-next-line */
export interface ProductsListProps {}

export function ProductsList(props: ProductsListProps) {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [cart, setCart] = useRecoilState<Product[]>(cartState);

  const addToCart = (product: Product) => () => {
    setCart([...cart, product])
  };

  useEffect(() => {
    const getProduct = async () => {
      await axios.get('http://localhost:3333/product/all').then((res) => {
        setProducts(res.data);
      });
    };
    getProduct();
  }, []);
  return (
    <div className="max-w-2xl mx-auto">
      {products.map((product) => (
        <div className="flex bg-white rounded-lg shadow my-6">
          <div className="relative flex-none w-24 md:w-48">
            <img
              src={product.images[0]}
              alt="shopping image"
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
      ))}
    </div>
  );
}

export default ProductsList;
