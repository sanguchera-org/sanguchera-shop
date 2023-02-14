import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Main from './main/main';
import { Route, Routes } from 'react-router-dom';
import Store from './store/store';

export function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tienda" element={<Store />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
