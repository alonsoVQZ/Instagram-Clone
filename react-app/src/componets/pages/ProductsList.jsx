import { useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";


import ProductInformationCard from "../misc/ProductInformationCard";

import "./style/ProductsList.css"

function ProductsList() {
    const navigate = useNavigate();
    const products = useSelector((state) => state?.products);

    const handleItem = (id) => {
        navigate(`/products/${id}`)
    }
    
    return (
        <div id='ProductsList'>
            {/* <div id='ProductsList-d1'>

            </div> */}
            <div id='ProductsList-d2'>
                <div id='ProductsList-d2d1'>

                </div>
                <div id='ProductsList-d2d2'>
                    {
                        products && (
                            <ul id="ProductsList-ul1">
                                {
                                    Object.values(products).map((product)  => <ProductInformationCard { ...{ product } } />)
                                }
                            </ul>
                        )
                    }
                    {
                        !products && (
                            <h1>Not products found</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsList;