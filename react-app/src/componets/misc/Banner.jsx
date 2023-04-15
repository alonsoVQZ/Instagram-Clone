import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style/Banner.css"


export default function Banner() {
    
    const ads = [<Ad1 />, <Ad2 />, <Ad3 />]
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
            {ads[number]}
        </div>
    )
}

function Ad1() {
    const style = { background: "linear-gradient(180deg, rgba(17,150,26,1) 65%, rgba(255,255,255,0) 100%)" }
    return (
        <div className="Ad" style={style}>
            <span className="Ad-s1">Welcome to <NavLink id='Header-d1d1nl1'style={ { fontSize: "large"} } to={"/"}><span id='Header-d1d1nl1s1'style={ { fontSize: "xxx-large"} }>aovz</span><span id='Header-d1d1nl1s2' style={ { fontSize: "xxx-large"} }>on</span></NavLink></span>
        </div>
    )
}

function Ad2() {
    const style = { background: "linear-gradient(180deg, rgba(17,96,150,1) 65%, rgba(255,255,255,0) 100%)" }
    return (
        <div className="Ad" style={style}>
            <span className="Ad-s1">Advertise yourself here</span>
        </div>
    )
}

function Ad3() {
    const style = { background: "linear-gradient(180deg, rgba(212,29,174,1) 65%, rgba(255,255,255,0) 100%)" }
    return (
        <div className="Ad" style={style}>
            <span className="Ad-s1">Advertise yourself here</span>
        </div>
    )
}