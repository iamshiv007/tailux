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

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
\      <Route path='/logInSignUp1' element={<LogInSignUp1/>} />
      <Route path='/otpPage' element={<OtpPage/>} />
      <Route path='/createAccount' element={<CreateAccount/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/resetPassword' element={<ResetPassword/>} />
      <Route path='/resetPasswordOtp' element={<ResetPasswordOtp/>} />
      <Route path='/setPassword' element={<SetPassword/>} />
      <Route path='/product' element={<Product/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
