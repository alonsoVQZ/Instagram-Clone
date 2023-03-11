import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import "./style/ReviewForm.css"

function ReviewForm() {
    const navigate = useNavigate();
    const { productId, reviewId } = useParams();
    const [rating, setRating] = useState(0);
    const [headline, setHeadline] = useState("");
    const [comment, setComment] = useState("");
    const [headlineError, setHeadlineError] = useState(false);
    const [commentError, setCommentError] = useState(false);
    const handleSubmit = async () => {
        if(!headline.length) {
            setHeadlineError(true)
            return
        }
        if(!comment.length) {
            setCommentError(true)
            return
        }
        const formValues = {
            rating,
            headline,
            comment,
            productId,
        }
        if(reviewId) {
            await fetch(`/api/reviews/${reviewId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(formValues),
            });
        } else {
            await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(formValues),
            });
        }
        navigate(`/products/${productId}`)
    }

    


    useState(async () => {
        if(reviewId) {
            const response = await fetch(`/api/reviews/${reviewId}`, { method: "GET" });
            const reponseJSON = await response.json();
            if(!reponseJSON.error) {
                setRating(reponseJSON.rating)
                setHeadline(reponseJSON.headline)
                setComment(reponseJSON.comment)
            }
        }
    }, [])
    
    useEffect(() => {
        if(headline.length > 0) setHeadlineError(false)
        if(comment.length > 0) setCommentError(false)
    }, [headline, comment])
    return (
        <div id="ReviewForm">
            <form  id="ReviewForm-f1">
                <div className="ReviewForm-f1-div">
                    { reviewId && <span id="ReviewForm-f1s1">Edit Review</span> }
                    { !reviewId && <span id="ReviewForm-f1s1">Create Review</span> }
                </div>
                <div className="ReviewForm-f1-div">
                    <label className="ReviewForm-label">Overall rating</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className="ReviewForm-f1-div">
                    <label className="ReviewForm-label" htmlFor="">Add a headline</label>
                    <input className="ReviewForm-f1-input" type="text" placeholder="What's most important to know?" value={headline} onChange={(e) => setHeadline(e.target.value)}/>
                    { headlineError && <span>Headline can't be empty</span> }
                </div>
                <div className="ReviewForm-f1-div">
                    <label className="ReviewForm-label" htmlFor="">Add a written review</label>
                    <textarea cols="30" rows="10"  placeholder="What did you like or dislike? What did you use this product for?" value={comment} onChange={(e) => setComment(e.target.value)} />
                    { commentError && <span>Review can't be empty</span> }
                </div>
                <div id="ReviewForm-f1d5">
                    <button id="ReviewForm-f1d5b1" type="button" onClick={() => handleSubmit()}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;