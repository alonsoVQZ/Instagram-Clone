import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RatingStars from "../misc/RatingStars"

import "./style/ProductInformationCard.css"


function ProductInformationCard({ product }) {
    const navigate = useNavigate();
    const handleItem = (e) => navigate(`/products/${product.id}`)
    
    const [intNum, setIntNum] = useState(0)
    const [decNum, setDecNum] = useState(0)

    useEffect(() => {
        let price  = 0
        if(product.discount) {
            price = product.price * (1 - (product.discount / 100));
            setIntNum(parseInt(price));
            setDecNum(parseInt(100 * (price % 1).toFixed(2)));
        } else {
            price = product.price;
            setIntNum(parseInt(price));
            setDecNum(parseInt(100 * (price % 1).toFixed(2)));
        }
    }, [])

    return (
        <li className="ProductInformationCard" onClick={(e) => handleItem(e)}>
            <div className="ProductInformationCard-d1">
                <img className="ProductInformationCard-d1i1" src={product.medias[0].url} />
            </div>
            <div className="ProductInformationCard-d2">
                <span className="ProductInformationCard-d2s1 ProductInformationCard-d2-content">{ product.name }</span>
                <div className="ProductInformationCard-d2d1">
                    <RatingStars { ...{ rating: product.reviews_avg, width: 15} }/>
                    <span>{product.reviews_len}</span>
                </div>
                <div className="ProductInformationCard-d2d2 ProductInformationCard-d2-content">
                    <span className='ProductInformationCard-d2d2s1'>$</span>
                    <span className='ProductInformationCard-d2d2s2'>{intNum}</span>
                    <span className='ProductInformationCard-d2d2s3'>{decNum}</span>
                    {
                        (product.discount > 0) && <span  className='ProductInformationCard-d2d2s4'>{product.price}</span>
                    }
                </div>
            </div>
        </li>
    )
}

export default ProductInformationCard;