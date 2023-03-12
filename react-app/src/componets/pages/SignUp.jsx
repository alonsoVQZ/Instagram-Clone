import { NavLink, useNavigate } from "react-router-dom";
import SignUpForm from '../forms/SignUpForm'

import './style/SignUp.css'


function SignUp() {
    return (
        <div id="SignUp">
            {/* <NavLink to={"/"}><img id="SignUp-i1" src="/amazon-logo-black.png" /></NavLink> */}
            <NavLink id='SignUp-nl1' to={"/"}><span id='SignUp-nl1s1'>aovz</span><span id='SignUp-nl1s2'>on</span></NavLink>
            <SignUpForm />
            <div id='SignUp-d1'>
                <ul id='SignUp-d1ul1'>
                    <li>Conditions of Use</li>
                    <li>Privacy Notice</li>
                    <li>Help</li>
                </ul>
                <span>© 1996-2022, aovzon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}


export default SignUp;