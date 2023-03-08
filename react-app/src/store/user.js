const initialState = null;


const USER_SESSION = 'user/session';
const USER_SIGN_IN = 'user/signIn';
const USER_SIGN_UP = 'user/signUp';
const USER_SIGN_OUT = 'user/signOut';


const userSessionAction = (user) => {
    return {
        type: USER_SESSION,
        user
    }
}


const userSignInAction = (user) => {
    return {
        type: USER_SIGN_IN,
        user
    }
}


const userSignUpAction = (user) => {
    return {
        type: USER_SIGN_UP,
        user
    }
}


const userSignOutAction = () => {
    return {
        type: USER_SIGN_OUT,
    }
}



export const userSessionFunction = () => async (dispatch) => {
    const response = await fetch("/api/user/session");
    const responseJSON = await response.json();
    dispatch(userSessionAction(responseJSON));
    return responseJSON;
};
  

export const userSignInFunction = (data) => async (dispatch) => {
    const response = await fetch("/api/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    dispatch(userSignInAction(responseJSON));
    return responseJSON;
};

export const userSignUpFunction = (data) => async (dispatch) => {
    const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    if(responseJSON.error) return responseJSON;
    dispatch(userSignUpAction(responseJSON));
    return responseJSON;
};

export const userSignOutFunction = () => async (dispatch) => {
    const response = await fetch("/api/user/signout");
    const responseJSON = await response.json();
    dispatch(userSignOutAction());
    return responseJSON;
};
  

function userReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case USER_SESSION:
            newState = { ...action.user };
            return newState;
        case USER_SIGN_IN:
            newState = { ...action.user };
            return newState;
        case USER_SIGN_UP:
            newState = { ...action.user };
            return newState;
        case USER_SIGN_OUT:
            newState = initialState;
            return newState;
        default:
            return state;
    }
}
  
export default userReducer;