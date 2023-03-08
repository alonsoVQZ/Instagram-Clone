import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./style/ProductReviewsInfo.css"

function ProdcutsReviewsInfo() {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const { productId } = useParams()
    const handleReview = () => {
        if(user) navigate(`/products/${productId}/reviews`)
        else navigate("/signin")
    }

    return (
        <div id="ProdcutsReviewsInfo">
            <div>
                
            </div>
            <div id="ProdcutsReviewsInfo-d2">
                <span id="ProdcutsReviewsInfo-d2s1">Review this product</span>
                <span id="ProdcutsReviewsInfo-d2s2">Share your thoughts with other customers</span>
                <button onClick={() => handleReview()} type="button" id="ProdcutsReviewsInfo-d2b1">Write a costumer review</button>
            </div>
        </div>
    )
}

export default ProdcutsReviewsInfo;