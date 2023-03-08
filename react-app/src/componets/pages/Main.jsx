import { NavLink, useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Header from "../misc/Header";
import Footer from "../misc/Footer";
import Root from "./Root";
import ProductsList from "./ProductsList";
import ProductById from './ProductById';
import Cart from "./Cart";
import Orders from "./Orders";
import ReviewFormPage from "./ReviewFormPage";

import "./style/Main.css"


function Main() {
    let { productId } = useParams();
    return (
        <div id="Main">
            <Header />
            <Routes>
                <Route path="/"element={ <Root /> }/>
                <Route path="cart" element={ <Cart /> } />
                <Route path="orders" element={ <Orders /> } />
                <Route path="products" element={ <ProductsList /> } />
                <Route path="products/:productId" element={ <ProductById />  } />
                <Route path="products/:productId/reviews" element={ <ReviewFormPage />  } />
                <Route path="products/:productId/reviews/:reviewId" element={ <ReviewFormPage />  } />

            </Routes>
            <Footer />
        </div>
    )
}


export default Main;