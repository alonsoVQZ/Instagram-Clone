import { useState, useEffect, useSelec } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

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
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='Anonymus' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className="headerspantop">Hello, sign in</span>
            <span className="headerspanbot">Accounts & Lists</span>
            {
                dropdown && (
                    <div id='Anonymus-d1'>
                        <NavLink to={'/signin'}>Sign In</NavLink>
                        <span>New costumer? <NavLink to={'/signup'}>Start here.</NavLink></span>
                    </div>
                )
            }
        </div>
    )
}

function User({ currentUser }) {
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState(false)
    const handleSignOut = async () => {
        const response =  await dispatch(userSignOutFunction());
    }
    return (
        <div id='Anonymus' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className="headerspantop">Hello, {currentUser.first_name}</span>
            <span className="headerspanbot">Accounts & Lists</span>
            {
                dropdown && (
                    <div id='Anonymus-d1'>
                        <span onClick={() => handleSignOut()}>Sign Out</span>
                    </div>
                )
            }
        </div>
    )
}


export default UserBar;