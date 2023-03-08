
import {  useEffect } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import './style/OrdersBar.css';

function OrdersBar() {
    const user = useSelector(state => state.user)
    const navigate  = useNavigate()
    const handleOrders = () => {
        if(user) navigate("/orders")
        else navigate("/signin")
    }
    // useEffect(() => {
    //     if(!user) navigate("/")
    // }, [user])
    return (
        <div id='OrdersBar' onClick={() => handleOrders()}>
            <span className="headerspantop">Returns</span>
            <span className="headerspanbot">& Orders</span>
        </div>
    )
}


export default OrdersBar;