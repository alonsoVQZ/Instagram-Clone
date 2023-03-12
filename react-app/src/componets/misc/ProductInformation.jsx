import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';

import RatingStars from "../misc/RatingStars"

import './style/ProductInformation.css'

function ProductInformation({ product }) {
    const { name, discount, description, price } = product;
    const priceStr = `${(price * (100 - discount) / 100).toFixed(2)}`.split(".")
    
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
        <div id='ProductInformation'>
            <div id='ProductInformation-d1'>
                <span id='ProductInformation-d1s1'>{name}</span>
                {/* <NavLink id='ProductInformation-d1NL1'>Visit the { store } Store</NavLink> */}
                <div id='ProductInformation-d1d1'>
                    <RatingStars { ...{ rating: product.reviews_avg, width: 15} }/>
                    <span id='ProductInformation-d1d1s2'>{product.reviews_len} ratings</span>
                </div>
            </div>
            <div id='ProductInformation-d2'>
                <div id='ProductInformation-d2d1'>
                    <div id='ProductInformation-d2d1d1'>
                        {
                            discount && (
                                <>
                                    <span id='ProductInformation-d2d1d1s1'>{`-${discount}%`}</span>
                                    <div id='ProductInformation-d2d1d1d1'>
                                        <span id='ProductInformation-d2d1d1d1s1'>$</span>
                                        <span id='ProductInformation-d2d1d1d1s2'>{intNum}</span>
                                        <span id='ProductInformation-d2d1d1d1s3'>{decNum}</span>
                                    </div>
                                </>
                            )
                        }
                        {
                            !discount && (
                                <>
                                    <div id='ProductInformation-d2d1d1d1'>
                                        <span id='ProductInformation-d2d1d1d1s1'>$</span>
                                        <span id='ProductInformation-d2d1d1d1s2'>{priceStr[0]}</span>
                                        <span id='ProductInformation-d2d1d1d1s3'>{priceStr[1]}</span>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    {
                        discount && (
                            <>
                                <div id='ProductInformation-d2d1d2'>
                                    <span id='ProductInformation-d2d1d2s1'>List Price: </span>
                                    <span id='ProductInformation-d2d1d2s2'>{price}</span>
                                </div>
                            </>
                        )
                    }
                </div>
                <div id='ProductInformation-d2d2'>
                    {description}
                </div>
            </div>
        </div>
    )
}


export default ProductInformation;