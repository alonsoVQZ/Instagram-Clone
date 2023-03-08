
import SignUpForm from '../forms/SignUpForm'

import './style/SignUp.css'


function SignUp() {
    return (
        <div id="SignUp">
            <img id="SignUp-i1" src="/amazon-logo-black.png" />
            <SignUpForm />
            <div id='SignUp-d1'>
                <ul id='SignUp-d1ul1'>
                    <li>Conditions of Use</li>
                    <li>Privacy Notice</li>
                    <li>Help</li>
                </ul>
                <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}


export default SignUp;