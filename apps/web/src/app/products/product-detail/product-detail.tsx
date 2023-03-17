import { environment } from '../../../environments/environment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Cart, Product } from '../../models';
import { cartState } from '../../store';
import styles from './product-detail.module.scss';

export function ProductDetail() {
  const { id } = useParams();

  const [cart, setCart] = useRecoilState<Cart>(cartState);

  //Review type any product
  const [product, setProduct] = useState<any>();
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = (product: Product) => {
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
    const getProduct = async () => {
      await axios.get(`${environment.apiUrl}/product/${id}`).then((res) => {
        setProduct(res.data);
      });
    };
    getProduct();
  }, []);
  return (
    <div className="max-w-4xl m-auto font-sans">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <img
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
            className="p-8 rounded-t-lg"
            src={isHovered ? product?.images[0] : product?.images[1]}
            alt="Product"
          />
        </div>
        <div className="border-gray-300 border-t-2">
          <div className="px-5 pb-5">
            <h5 className="text-2xl mt-2 font-semibold tracking-tight text-gray-900">
              {product?.name}
            </h5>
            <p className="my-2">{product?.description}</p>
          </div>
          <div className="border-gray-300 border-t-2 pt-4 px-5 pb-5 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-400 ">
              S/.{' '}
              <span className="text-3xl font-bold text-gray-900 ">
                {product?.price.toFixed(2)}
              </span>
            </span>
            <button
              onClick={() => addToCart(product)}
              className="text-white bg--700 bg-gray-600 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
