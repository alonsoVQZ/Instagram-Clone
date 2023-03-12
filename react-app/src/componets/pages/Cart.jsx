import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cartClearFunction, cartRemoveProductFunction } from "../../store/cart";

import "./style/Cart.css";

function Cart() {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const [subtotal, setSubtotal] = useState(0);
    
    const realPrice = (price, discount=0) => price * (1 - (discount / 100));

    const handleOrder = async () => {
        await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify({ subtotal: subtotal, cart: cart }),
        });
        await dispatch(cartClearFunction())
        navigate("/orders")
    }

    const handleRemoveProduct = async(id) => {
        await dispatch(cartRemoveProductFunction(id))
    }

    useEffect(() => {
        let sum = 0;
        for(let i = 0; i < cart.length; i++) {
            if(cart[i][0].discount) sum += realPrice(cart[i][0].price, cart[i][0].discount) * cart[i][1]
            else sum += cart[i][0].price * cart[i][1]
        }
        setSubtotal(sum.toFixed(2))
    }, [cart])

    return (
        <div id="Cart">
            <div id="Cart-d1">
                <div id="Cart-d1d1">
                    {
                        (cart.length > 0) && (
                            <>
                                <div id="Cart-d1d1d1">
                                    <span id="Cart-d1d1d1s1">Shopping Cart</span>
                                </div>
                                <div id="Cart-d1d1d2">
                                    {
                                        cart.map(element => {
                                            const [product, quantity] = element;
                                            return (
                                                <div className="Cart-d1d1d2-card">
                                                    <div className="Cart-d1d1d2d1d1">
                                                        <img className="Cart-d1d1d2d1d1i1" src={product.medias[0].url}/>
                                                    </div>
                                                    <div className="Cart-d1d1d2d1d2">
                                                        <span>{product.name}</span>
                                                        <div className="Cart-d1d1d2d1d2d1">
                                                            <button className="Cart-d1d1d2d1d2d1b1" type="button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                                                        </div>
                                                    </div>
                                                    <div className="Cart-d1d1d2d1d3">
                                                        <span>{`$${(realPrice(product.price, product?.discount) * quantity).toFixed(2)}`}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div id="Cart-d1d1d3">
                                    <span id="Cart-d1d1d3s1">{`Subtotal: `}</span>
                                    <span id="Cart-d1d1d3s2">{`$${subtotal}`}</span>
                                </div>
                            </>
                        )
                    }
                    {
                        (!cart.length) && <span id="Cart-d1d1d1s1">Your aovzon Cart is empty</span>
                    }
                </div>
            </div>
            <div id="Cart-d2">
                <div id="Cart-d2d1">
                    <div id="Cart-d2d1d1">
                        <span id="Cart-d1d1d3s1">{`Subtotal:`}</span>
                        <span id="Cart-d1d1d3s2">{`$${subtotal}`}</span>
                    </div>
                    <div id="Cart-d2d1d2">
                        <button id="Cart-d2d1d2b1" onClick={() => handleOrder()} type="button">Place your order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
