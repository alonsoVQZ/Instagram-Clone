import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import './style/CartBar.css';

function CartBar() {
    const user = useSelector(state => state.user)
    const navigate  = useNavigate()
    const handleCart = () => {
        if(user) navigate("/cart")
        else navigate("/signin")
    }
    useEffect(() => {
        if(!user) navigate("/")
    }, [user])
    return (
        <div id='CartBar' onClick={() => handleCart()}>
            <img id="CartBar-i1" alt="image" src="/cart-icon.png"/>
            <span className="headerspanbot">Cart</span>
        </div>
    )
}


export default CartBar;