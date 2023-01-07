import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import OrderReview from './components/order-review/OrderReview';
import Inventory from './components/inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Shop></Shop>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
