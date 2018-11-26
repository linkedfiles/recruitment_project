// import

import axios from 'axios';
import { getTranslateFunction } from 'redux-i18n';


// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";


// action creators

function saveToken(token) {
    return {
      type: SAVE_TOKEN,
      token
    };  
  }


function logout() {
    return {
        type: LOGOUT
    };
  }

/*function createAccount(email, name, password) {
    return dispatch
}*/

// API actions
function usernameLogin(username, password) {
    return dispatch => {
        axios({
            method:'post',
            url: 'http://localhost:3001/api/v1/users/login',
            data: {
                email: username,
                password: password
            }
        })
        .then(res => {
            if(res.data.token){
                dispatch(saveToken(res.data.token))
            }
        })
        /*.then(json => {
        if(json.data.token) {
            dispatch(saveToken(json.data.token))
            }
        })*/
        .catch(err => console.log(err))
    }
}
 


// initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt")? true : false,
    token: localStorage.getItem("jwt")
}


// reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
          return applySetToken(state, action);
         default:
            return state;
    }

}

// reducer funtions

function applySetToken(state, action) {
    const { token } = action;
    localStorage.setItem("jwt", token);
    return {
      ...state,
      isLoggedIn: true,
      token: token
    };
  }

  



// exports
const actionCreators = {
    saveToken,
    logout,
    usernameLogin
};

export { actionCreators };

// export reducer by default
// export reducer example //

export default reducer;