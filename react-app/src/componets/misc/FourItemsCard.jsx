import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/FourItemsCard.css"

function FourItemsCard({ title }) {
    return (
        <div id="FourItemsCard">
            <span id="FourItemsCard-s1">{title}</span>
            <div id="FourItemsCard-d1">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

function Product() {
    const navigate = useNavigate()
    const [image, setImage] = useState()
    const [id, setId] = useState(Math.floor(Math.random() * 16) + 1);
    const fetchProduct = async () => {
        const response = await fetch(`/api/products/main/${id}`)
        const responseJSON = await response.json();
        if(responseJSON.error) setImage(null)
        else setImage(responseJSON.medias[0].url)
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    const handleProduct = () => navigate(`/products/${id}`)

    return (
        <div onClick={() => handleProduct()} className="Product">
            <img className="Product-image" src={image}/>
        </div>
    )
}

export default FourItemsCard;