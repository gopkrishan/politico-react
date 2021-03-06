import actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
  isAdmin: false,
  redirect: false,
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEGIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, loading: false };
    case actionTypes.LOGIN_SUCCESS_ADMIN:
      return {
        ...state,
        loading: false,
        isAdmin: true,
        redirect: true,
        token: action.token,
      };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, redirect: true, token: action.token };
    case actionTypes.LOGOUT:
      return {
        ...state,
        redirect: false,
        isAdmin: false,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
