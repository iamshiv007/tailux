import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Box from './components/home/Box';
import ProductPage from './components/product/ProductPage';
import './App.css';
import LogInSignUp1 from './components/user/LogInSignUp1';
import OtpPage from './components/user/OtpPage';
import CreateAccount from './components/user/CreateAccount';
import Login from './components/user/Login';
import ResetPassword from './components/user/ResetPassword';
import ResetPasswordOtp from './components/user/ResetPasswordOtp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/box' element={<Box/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/logInSignUp1' element={<LogInSignUp1/>} />
      <Route path='/otpPage' element={<OtpPage/>} />
      <Route path='/createAccount' element={<CreateAccount/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/resetPassword' element={<ResetPassword/>} />
      <Route path='/resetPasswordOtp' element={<ResetPasswordOtp/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
