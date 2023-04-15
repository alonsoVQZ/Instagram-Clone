import { useState, useEffect, useSelec } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";

import { userSignOutFunction } from "../../store/user";

import './style/UserBar.css'

function UserBar() {
    const currentUser = useSelector(state => state.user)
    const [component, setComponent] = useState(null)
    useEffect(() => {
        if(!currentUser) setComponent(<Anonymus />)
        else setComponent(<User { ...{ currentUser } } />)
    }, [currentUser])
    return (
        <div id='UserBar'>
            {component}
        </div>
    )
}

function Anonymus() {
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='Anonymus' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className="headerspantop">Hello, sign in</span>
            <span className="headerspanbot">Accounts & Lists</span>
            {
                dropdown && (
                    <div id='Anonymus-d1'>
                        <span className="Anonymus-d1s1" onClick={() => navigate("/signin")}>Sign In</span>
                        <span className="Anonymus-d1s1" onClick={() => navigate("/signup")}>Create Account</span>
                    </div>
                )
            }
        </div>
    )
}

function User({ currentUser }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false)
    const handleSignOut = async () => {
        const response =  await dispatch(userSignOutFunction());
    }
    return (
        <div id='Anonymus' onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className="headerspantop">Hello, {currentUser.first_name}</span>
            <span className="headerspanbot">Accounts & Lists</span>
            {
                dropdown && (
                    <div id='Anonymus-d1'>
                        <span className="Anonymus-d1s1" onClick={() => navigate("/account")}>Account</span>
                        <span className="Anonymus-d1s1" onClick={() => handleSignOut()}>Sign Out</span>
                    </div>
                )
            }
        </div>
    )
}


export default UserBar;