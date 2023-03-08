import { useEffect } from "react"
import ReviewCard from "./ReviewCard"

function ProductReviews({ product, setReload }) {
    const reviews = product.reviews;
    return (
        <div>
            {
                reviews.map(review => <ReviewCard { ...{ review, setReload } } />)
            }
        </div>
    )
}

export default ProductReviews