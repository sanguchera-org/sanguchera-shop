import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Main from './main/main';
import Shop from './shop/shop';
import Cart from './cart/cart';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import ProductDetail from './products/product-detail/product-detail';
import Open from './layout/open/open';
import './core/firebase';
import CheckoutDelivery from './checkout/checkout-delivery/checkout-delivery';
import CheckoutPayment from './checkout/checkout-payment/checkout-payment';

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <RecoilRoot>
        <Suspense>
          <Header></Header>
        </Suspense>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/tienda/:id" element={<ProductDetail />} />
          <Route path="/compras" element={<Cart />} />
          <Route path="/checkout/delivery" element={<CheckoutDelivery />} />
          <Route path="/checkout/payment" element={<CheckoutPayment />} />
        </Routes>
        <Footer></Footer>
        <Open></Open>
      </RecoilRoot>
    </div>
  );
}

export default App;
