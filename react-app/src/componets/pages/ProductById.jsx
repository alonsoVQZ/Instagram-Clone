import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


import ProductMediaSlide from '../misc/ProductMediaSlide';
import ProductInformation from '../misc/ProductInformation';
import ProductOrder from '../misc/ProductOrder';
import ProductReviews from '../misc/ProductReviews';
import ProdcutsReviewsInfo from '../misc/ProductReviewsInfo';

import { productIdFunction } from '../../store/product';

import './style/ProductById.css'


function ProductById() {
    const [load, setLoad] = useState(false)
    const [reaload, setReload] = useState(false)
    const [product, setProduct] = useState()
    const dispatch = useDispatch()
    const { productId } = useParams();

    const productFetch = async () => {
        const response = await dispatch(productIdFunction(productId))
        if(response.error) setProduct(null)
        else setProduct(response)
        setLoad(true)
    }

    useEffect(() => {
        productFetch();
    }, [])

    
    useEffect(() => {
        productFetch();
        setReload(false)
    }, [reaload])


    return (
        <>
            {
                (load && product) && (
                    <div id='ProductById'>
                        <div id='ProductById-d1'>
                            {}
                        </div>
                        <div id='ProductById-d2'>
                            <ProductMediaSlide { ...{ product } } />
                            <ProductInformation { ...{ product } } />
                            <ProductOrder { ...{ product } } />
                        </div>
                        <div id='ProductById-d3'>
                            <ProdcutsReviewsInfo { ...{ product } }/>
                            <ProductReviews { ...{ product, setReload } } />
                        </div>
                    </div>

                )
                
            }
            {
                (load && !product) && (
                    <h1>Product Not Found</h1>
                )
            }
        </>
    )
}

export default ProductById;