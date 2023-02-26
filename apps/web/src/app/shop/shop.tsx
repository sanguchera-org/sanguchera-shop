import { Suspense } from 'react';
import ProductsList from '../products/products-list/products-list';
import './shop.scss';

export function Shop() {
  return (
    <Suspense fallback={<>Cargando..</>}>
      <div>
        <h1 className="text-4xl text-center my-4">Productos</h1>
        <div>
          <ProductsList />
        </div>
      </div>
    </Suspense>
  );
}

export default Shop;
