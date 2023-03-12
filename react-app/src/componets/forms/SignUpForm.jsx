import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { userSignInFunction, userSignUpFunction } from "../../store/user";

import './style/SignUpForm.css'

function SignUpForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        if(!firstName.length){
            setFirstNameError(true)
            return
        }
        if(!lastName.length){
            setLastNameError(true)
            return
        }
        if(!email.length){
            setEmailError(true)
            return
        }
        if(password.length < 6){
            setPasswordError(true)
            return
        }
        const form = { firstName, lastName, email, password }
        const response = await dispatch(userSignUpFunction(form))
        if(response.error) setEmailError(response.error)
        else navigate("/")
    }

    useEffect(() => {
        if(firstName.length > 0) setFirstNameError(false)
        if(lastName.length > 0) setLastNameError(false)
        if(email.length > 0) setEmailError(false)
        if(password.length > 5) setPasswordError(false)
    }, [firstName, lastName, email, password])

    return (
        <div id="SignUpForm">
            <div id="SignUpForm-d1">
                <span id="SignUpForm-d1s1">Create account</span>
            </div>
            <form id="SignUpForm-f1">
                <div className="SignUpForm-divs">
                    <label className="SignUpForm-labels">First Name</label>
                    <input className="SignUpForm-inputs" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name"/>
                    {
                        firstNameError && <span>Fist name can't be empty</span>
                    }
                </div>
                <div className="SignUpForm-divs">
                    <label className="SignUpForm-labels">Last Name</label>
                    <input className="SignUpForm-inputs" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name"/>
                    {
                        lastNameError && <span>Last name can't be empty</span>
                    }
                </div>
                <div className="SignUpForm-divs">
                    <label className="SignUpForm-labels">Email</label>
                    <input className="SignUpForm-inputs" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    {
                        emailError && <span>Email can't be empty</span>
                    }
                </div>
                <div className="SignUpForm-divs">
                    <label className="SignUpForm-labels">Password</label>
                    <input className="SignUpForm-inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characteres"/>
                    {
                        passwordError && <span>Password must be at least 6 characteres</span>
                    }
                </div>
                <button className="SignUpForm-buttons" onClick={() => handleSignUp()} type="button">Sign Up</button>
            </form>
            <div id="SignUpForm-d2">
                <span>By creating an account, you agree to aovzon's Conditions of Use and Privacy Notice.</span>
            </div>
            <div id="SignUpForm-d3">
                    <span>Already have an account? <NavLink to={'/signin'}>Sign in</NavLink></span>
            </div>
        </div>
    )
}


// function SignInPersonalAccountEmail({ setForm }) {
//     const [backendErrors, setBackendErrors] = useState("")
//     const [showBackendErrors, setShowBackendErrors] = useState(false)
//     const [frontendErrors, setFrontendErrors] = useState("")
//     const [showFrontendErrors, setShowFrontendErrors] = useState(false)
//     const [email, setEmail] = useState("")

//     const handleContinue = async () => {
//         if(frontendErrors.length > 0) {
//             setShowBackendErrors(false)
//             setShowFrontendErrors(true)
//             return
//         }
//         const response = await fetch("/api/accounts/personal/email", {
//             method: "POST",
//             headers: { "Content-Type": "application/JSON" },
//             body: JSON.stringify({ "email": email }),
//         });
//         const responseJSON = await response.json();
//         if(responseJSON.error) {
//             setBackendErrors(responseJSON.error)
//             setShowBackendErrors(true)
//         } else {
//             setForm(<SignInPersonalAccountPassword { ...{ setForm, data: responseJSON  } }/>)
//         }
//         return
//     }

//     useEffect(() => {
//         const errors = [];
//         if(email.length === 0) errors.push('- Enter your email')
//         if(errors.length === 0) setShowFrontendErrors(false)
//         setFrontendErrors(errors)
//     }, [email]);
//     return (
//         <div>
//             {
//                 showBackendErrors && <span>{backendErrors}</span>
//             }
//             <form className="class-SignInForm">
//                 <label for="">Email</label>
//                 <input type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)}/>
//                 {
//                     showFrontendErrors && <span>Enter your email</span>
//                 }
//                 <button type="button" onClick={(e) => handleContinue(e)}>Continue</button>
//             </form>
//             <span>By continuing, you agree to aovzon's Conditions of Use and Privacy Notice.</span>
//         </div>
//     )
// }


// function SignInPersonalAccountPassword({ setForm, data }) {
//     const dispatch = useDispatch();


//     const [backendErrors, setBackendErrors] = useState("")
//     const [showBackendErrors, setShowBackendErrors] = useState(false)
//     const [frontendErrors, setFrontendErrors] = useState("")
//     const [showFrontendErrors, setShowFrontendErrors] = useState(false)
//     const [password, setPassword] = useState("")


//     const handleCahnge = () => {
//         setForm(<SignInPersonalAccountEmail { ...{ setForm } }/>)
//         return
//     }


//     const handleSignIn = async () => {
//         if(frontendErrors) {
//             setShowBackendErrors(false)
//             setShowFrontendErrors(true)
//             return
//         }
//         const responseJSON = await dispatch(userSignInFunction({ ...data, password }))
//         if(responseJSON.error) {
//             setBackendErrors(responseJSON.error)
//             setShowBackendErrors(true)
//         } else {

//         }
//         return
//     }

    
//     useEffect(() => {
//         if(!password) {
//             setFrontendErrors('Enter your password')
//         }
//         if(password.length > 0) {
//             setFrontendErrors('')
//             setShowFrontendErrors(false)
//         }
//     }, [password]);


//     return (
//         <div>
//             {
//                 showBackendErrors && <span>{backendErrors}</span>
//             }
//             <p>{ data.email } <span onClick={(e) => handleCahnge(e)}>Change</span></p>
//             <form className="class-SignInForm">
//                 <div>
//                     <label for="">Password</label>
//                     <span>Forgot your password?</span>
//                 </div>
//                 <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                 {
//                     showFrontendErrors && <span>Enter your password</span>
//                 }
//                 <button type="button" onClick={(e) => handleSignIn(e)}>Sign In</button>
//                 <div>
//                     <input type="checkbox" name="" value="" />
//                     <span>Keep me signed in. Details</span>
//                 </div>
//             </form>
//         </div>
//     )
// }

export default SignUpForm;