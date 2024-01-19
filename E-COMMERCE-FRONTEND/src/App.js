import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Layout from './components/Layout';
import Products from './pages/products';
import Page_404 from './pages/404';
import Login from './pages/login';
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/forgotPassword';
import SetPassword from './pages/setpassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
import UserProfile from './pages/Admin/UserProfile';
import Category from './pages/Admin/Category';
import EditCategory from './pages/Admin/EditCategory';
import AddProduct from './pages/Admin/AddProduct';
import Allproducts from './pages/Admin/AllProducts';
// import Products from './pages/products';
function App() {
	return (
		<>
	
	<BrowserRouter>
      <Routes>
      <Route path="/form" element={<App />}>
         
         
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/users/:id" element={<UserProfile />} />
        <Route path="admin/categories" element={<Category />} />
        <Route path="admin/category/:id" element={<EditCategory />} />
        <Route path="admin/product/add-product" element={<AddProduct />} />
        <Route path="admin/products" element={<Allproducts />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<SetPassword />} />
		    <Route path="*" element={<Page_404 />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
		</>
	);
}

export default App;
