import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export function reducers(state = initialState.login, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESSFUL:
            return {
                ...state,
                userIsLoggedIn: true,
                user: action.user,
                creatingUser: false
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                user: null,
                userIsLoggedIn: false,
                loginError: action.error,
                creatingUser: false
            };
        case types.LOGOUT_SUCCESSFUL:
            return initialState.login;
        case types.CREATING_USER:
            return {
                ...state,
                creatingUser: true
            };
        case types.LOGOUT_FAIL:
            return initialState.login;
        default:
            return state;
    }
}
