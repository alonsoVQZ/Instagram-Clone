import { NavLink, useNavigate } from "react-router-dom";

import SignInForm from "../forms/SignInForm";
import "./style/SignIn.css"

import './style/SignIn.css'


function SignIn() {
    const navigate = useNavigate()
    const handleSignUp = () => navigate("/signup")
    return (
        <div id="SignIn">
            <img id="SignIn-i1" src="/amazon-logo-black.png" />
            <SignInForm />
            <div id="SignIn-d1">
                <span id="SignIn-d1s1">New to amazon?</span>
                <button id="SignIn-d1b1" onClick={() => handleSignUp()} type="button">Create your Amazon account</button>
            </div>
            <div id='SignIn-d2'>
                <ul id='SignIn-d2ul1'>
                    <li>Conditions of Use</li>
                    <li>Privacy Notice</li>
                    <li>Help</li>
                </ul>
                <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}


export default SignIn;