import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";

import "./style/ReviewCard.css"

function ReviewCard({ review, setReload }) {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user)
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
    const date = new Date(review.created_at);
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const user = review.user;

    const handleEdit = () => navigate(`/products/${review.product_id}/reviews/${review.id}`)

    const handleDelete = async () => {
        const response = await fetch(`/api/reviews/${review.id}`, { method: "DELETE"})
        setReload(true)
    }

    return (
        <div className="ReviewCard">
            <div className="ReviewCard-d1">
                <div className="ReviewCard-d1d1">
                    <img className="ReviewCard-d1d1i1" src="/user-icon.png"/>
                </div>
                <span className="ReviewCard-d1s1">{user.first_name}</span>
            </div>
            <div className="ReviewCard-d2">
                <RatingStars { ...{ rating:review.rating, width: 20 } }/>
                <span className="ReviewCard-d2s1">{review.headline}</span>
            </div>
            <span className="ReviewCard-s1">{`Reviewed on ${months[month]} ${day}, ${year}`}</span>
            <p className="ReviewCard-p1">{review.comment}</p>
            {
                (user.id === currentUser.id) && (
                    <div className="ReviewCard-d3">
                        <button onClick={() => handleEdit()} className="ReviewCard-d3b1" type="button">Edit</button>
                        <button onClick={() => handleDelete()} className="ReviewCard-d3b2" type="button">Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default ReviewCard;