import "./style/OrderCard.css"

function OrderCard({ element, setReload }) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const date = new Date(element.created_at);
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const handleCancelOrder = async () => {
        await fetch(`/api/orders/${element.id}`, { method: "DELETE" });
        setReload(true)
    }

    const handleCancelItems = async (id) => {
        await fetch(`/api/orders/products/${id}`, { method: "DELETE" });
        setReload(true)
    }

    return (
        <div className="OrderCard">
            <div className="OrderCard-d1">
                <div className="OrderCard-d1d1">
                    <span>ORDER PLACED</span>
                    <span>{`${months[month]} ${day}, ${year}`}</span>
                </div>
                <div className="OrderCard-d1d2">
                    <span>TOTAL</span>
                    <span>${element.subtotal}</span>
                </div>
                <div className="OrderCard-d1d3">
                    <span>{`ORDER # ${element.id}`}</span>
                </div>
            </div>
            <div className="OrderCard-d2">
                {
                    element.orders_products.map((innerElement) => {
                        const product = innerElement.product
                        const numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]
                        return (
                            <div className="OrderCard-d2d1">
                                <div className="OrderCard-d2d1d1">
                                    <div className="OrderCard-d2d1d1d1">
                                        <img className="OrderCard-d2d1d1d1i1" src={product.medias[0].url} />
                                    </div>
                                    <div className="OrderCard-d2d1d1d2">
                                        <span>{product.name}</span>
                                    </div>
                                </div>
                                <div className="OrderCard-d2d1d2">
                                    <div className="OrderCard-d2d1d2d1">
                                        <span className="OrderCard-d2d1d2d1s1">Quantity</span>
                                        <select className="OrderCard-d2d1d2d1sel1" name="" id="" value={innerElement.quantity}>
                                            {
                                                numbers.map(number => {
                                                    return (
                                                        <option value={number}>{number}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <button className="OrderCard-d2d1d2d1b1">Submit</button>
                                    </div>
                                    
                                    <button className="OrderCard-d2d1d2b1" onClick={() => handleCancelItems(innerElement.id)} type="button">Cancel Items</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="OrderCard-d3">
                <button className="OrderCard-d3b1" onClick={() => handleCancelOrder()} type="button">Cancel Order</button>
            </div>
        </div>
    )
}

export default OrderCard;