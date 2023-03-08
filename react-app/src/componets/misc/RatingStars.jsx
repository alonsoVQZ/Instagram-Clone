import { useEffect } from "react"
import "./style/RatingStars.css"

function RatingStars({ rating=0, width=20}) {  
    return (
        <div className="RatingStars" style={ { height: `${width}px`, width: `${width * 5}px` } }>
            <div className="RatingStars-d1">
                <img className="RatingStars-whiteStar" style={ { height: `${width}px`, width: `${width}px` } } src="/star-white.png"/>
                <img className="RatingStars-whiteStar" style={ { height: `${width}px`, width: `${width}px` } } src="/star-white.png"/>
                <img className="RatingStars-whiteStar" style={ { height: `${width}px`, width: `${width}px` } } src="/star-white.png"/>
                <img className="RatingStars-whiteStar" style={ { height: `${width}px`, width: `${width}px` } } src="/star-white.png"/>
                <img className="RatingStars-whiteStar" style={ { height: `${width}px`, width: `${width}px` } } src="/star-white.png"/>
            </div>
            <div className="RatingStars-d2">
                {
                    [1, 2, 3, 4, 5].map(number => {
                        if(number <= rating) return <YellowStar { ...{ width } } />
                        if(rating < number && rating > (number - 1)) {
                            const divWidth = (rating % 1).toFixed(2) * 100
                            return <YellowStar { ...{ width, divWidth } } />
                        }
                    })
                }
            </div>
        </div>
    )
}

function YellowStar({ width, divWidth=100 }) {
    return (
        <div className="YellowStar" style={ { width: `${divWidth}%` } }>
            <img className="RatingStars-whiteStar" style={ { height: `${width}px`, width: `${width}px` } } src="/star-yellow.png"/>
        </div>
    )
}

export default RatingStars;