import { useEffect, useState } from "react";

import "./style/Order.css"

import OrderCard from "../misc/OderCard";

function Orders() {
    const [reload, setReload] = useState(false)
    const [load, setLoad] = useState(false)
    const [orders, setOrders] = useState([])

    const ordersFetch = async () => {
        const response = await fetch("/api/orders", { method: 'GET' })
        const responseJSON = await response.json();
        setOrders(responseJSON)
        setLoad(true)
    }
    useEffect(() => {
        ordersFetch();
        setReload(false)
    }, [reload])

    useEffect(() => {
        ordersFetch();
    }, [])
    
    return (
        <div id="Orders">
            {
                (load && orders.length > 0) && (
                    <div id="Orders-d1-orders">
                        {
                            orders.map(element => <OrderCard { ...{ element, setReload } } />)
                        }
                    </div>
                )
            }
            {
                (load && !orders.length) && (
                    <div id="Orders-d1-notOrders">
                        <h1>Not orders</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Orders;