import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home';
// import Login from './pages/Auth/Login';
// import ProtectedRoute from "./components/ProtectedRoute";
// import OTPVerification from './pages/Auth/OTPVerification';
// import ProductList from './pages/Products/ProductList';
// import ProductDetails from './pages/Products/ProductDetails';
import Category from './pages/Products/Category';

import CartPage from './pages/Cart/CartPage';
import Checkout1 from './pages/Cart/Checkout1';
import Checkout2 from './pages/Cart/Checkout2';
import Checkout3 from './pages/Cart/Checkout3';
import Profile from './pages/Accounts/Profile';
import Family from './pages/Accounts/Family';
import Wallet from './pages/Accounts/Wallet';
import Address from './pages/Accounts/Address';
import MyOrders from './pages/Accounts/MyOrders';
import OrderDetails from './pages/Accounts/OrderDetails';
import Wishlist from './pages/Accounts/WishList';
// import Plans from './pages/Subscription/Plans';
// import Subscription from './pages/Subscription/Subscription';
// import SubscriptionSuccess from './pages/Subscription/SubscriptionSuccess';
import LearnArticles from './pages/Articles/LearnArticles';
import ArticleDetails from './pages/Articles/ArticleDetails';
// import JoinEventPopup from './pages/Events/JoinEventPopup';
// import HelpAndSupport from './pages/Support/HelpAndSupport';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} /> */} 
          <Route path="/category/category" element={<Category />} />  
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout/address" element={<Checkout1 />} />
          <Route path="/checkout/payment" element={<Checkout2 />} />
          <Route path="/checkout/confirmation" element={<Checkout3 />} />
          <Route path="/articles" element={<LearnArticles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/about" element={<About />} />
          {/*<Route path="/help" element={<HelpAndSupport />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/subscription-success" element={<SubscriptionSuccess />} />
          <Route path="/event/:id" element={<JoinEventPopup />} /> */} 

          {/* Protected Routes (require auth) */}
          {/* <Route element={<ProtectedRoute />}> */}

          <Route path="/account" element={<Profile />} />
          <Route path="/account/family" element={<Family />} />
          <Route path="/account/wallet" element={<Wallet />} />
          <Route path="/account/address" element={<Address />} />
          <Route path="/account/orders" element={<MyOrders />} />
          <Route path="/account/orders/:id" element={<OrderDetails />} />
          <Route path="/account/wishlist" element={<Wishlist />} /> 
          {/* </Route> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;