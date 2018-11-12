// imports

// actions

const SET_COMPANIES = "SET_COMPANIES";

// action creator

function setCompanies(Companies) {
    return {
        type: SET_COMPANIES,
        Companies
    }
}

// api actions
function getCompanies() {
    return (dispatch, getState) => {
      const { user: { token } } = getState();
      fetch("http://localhost:3001/api/v1/users/:_id/Companies", {
        headers: {
          Authorization: `jwt ${token}`
        }
      })
        .then(response => response.json())
        .then(json => dispatch(setCompanies(json)));
    };
  }


// initail state

const initialState = {
    Companies: []
};

// reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMPANIES:
          return applySetCompanies(state, action);
      default:
        return state;
    }
  }

// reducer functions

function applySetCompanies(state, action) {
    const { Companies } = action;
    return {
        ...state,
        Companies
    }
}

//exrpots

const actionCreators  = {
    getCompanies
};

export { actionCreators  };

// defualt reducer export

export default reducer;