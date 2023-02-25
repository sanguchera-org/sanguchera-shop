import ProductsList from '../products-list/products-list';
import './store.scss';

/* eslint-disable-next-line */
export interface StoreProps {}

export function Store(props: StoreProps) {
  return (
    <div>
      <h1 className='text-4xl text-center my-4'>Productos</h1>
      <div>
        <ProductsList />
      </div>
    </div>
  );
}
export default Store;
