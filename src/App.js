import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
import LogInSignUp1 from './components/user/LogInSignUp1';
import OtpPage from './components/user/OtpPage';
import CreateAccount from './components/user/CreateAccount';
import Login from './components/user/Login';
import ResetPassword from './components/user/ResetPassword';
import ResetPasswordOtp from './components/user/ResetPasswordOtp';
import SetPassword from './components/user/SetPassword';
import Product from './components/product/Product';
import ProductCustomization from './components/product/ProductCustomization';
import Cart1 from './components/cart/Cart1';
import Cart2 from './components/cart/Cart2';
import Cart3 from './components/cart/Cart3';
import Profile from './components/Profile/Profile';
import Addresses from './components/Profile/Addresses';
import MySizes from './components/Profile/MySizes/MySizes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logInSignUp1' element={<LogInSignUp1 />} />
        <Route path='/otpPage' element={<OtpPage />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/resetPasswordOtp' element={<ResetPasswordOtp />} />
        <Route path='/setPassword' element={<SetPassword />} />
        <Route path='/product' element={<Product />} />
        <Route path='/ProductCustomization' element={<ProductCustomization />} />
        <Route path='/cart1' element={<Cart1 />} />
        <Route path='/cart2' element={<Cart2 />} />
        <Route path='/cart3' element={<Cart3 />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/addresses' element={<Addresses />} />
        <Route path='/mySizes' element={<MySizes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
