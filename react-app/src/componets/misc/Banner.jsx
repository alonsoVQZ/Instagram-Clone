import { useState } from "react";
import "./style/Banner.css"


function Banner() {
    const ads = [
        '/ads/ad_1.jpg',
        '/ads/ad_2.jpg',
        '/ads/ad_3.jpg',
        '/ads/ad_4.jpg',
    ]
    
    const [number, setNumber] = useState(0)
    const handleNext = () => {
        if(number >= ads.length - 1) setNumber(0)
        else setNumber(number + 1)
    }
    const handlePrevious = () => {
        if(number <= 0) setNumber(ads.length - 1);
        else setNumber(number - 1)
    }
    return (
        <div id='Banner'>
            <div id='Banner-d1'>
                <img id='Banner-d1i1' src='/less_than.png' alt="image" onClick={() => handlePrevious()}/>
                <img id='Banner-d1i2' src='/more_than.png' alt="image" onClick={() => handleNext()}/>
            </div>
            <img id='Banner-i1' alt="image" src={ads[number]} /> 
        </div>
    )
}

export default Banner;