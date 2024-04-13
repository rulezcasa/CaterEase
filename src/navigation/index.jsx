import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useSelector } from "react-redux";
import { cartProducts } from "../pages/stores/cart/cartSlice";
import { Footer } from "../components/Footer";
import Menu from "../pages/Menu/index";
import MenuItems from "../components/MenuItems";
import Cart from '../pages/Cart';

const Navigation = () => {
    const productsInCart = useSelector(cartProducts);

    return (
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/chicken" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken" />} />
                <Route path="/menu/beef" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef" />} />
                <Route path="/menu/dessert" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert" />} />
                <Route path="/menu/lamb" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb" />} />
                <Route path="/menu/miscellaneous" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous" />} />
                <Route path="/menu/pasta" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta" />} />
                <Route path="/menu/pork" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork" />} />
                <Route path="/menu/seafood" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood" />} />
                <Route path="/menu/side" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Side" />} />
                <Route path="/menu/starter" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter" />} />
                <Route path="/menu/vegan" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan" />} />
                <Route path="/menu/vegetarian" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian" />} />
                <Route path="/menu/breakfast" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast" />} />
                <Route path="/menu/goat" element={<MenuItems apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat" />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/payment-success" element={<PaymentSuccess />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation;
