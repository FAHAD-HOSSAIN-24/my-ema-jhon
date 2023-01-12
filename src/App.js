import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import OrderReview from './components/order-review/OrderReview';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import SignUp from './components/Signup/SignUp'
import RequireAuth from './components/require-auth/RequireAuth';
import Shipment from './components/shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Shop></Shop>}></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
