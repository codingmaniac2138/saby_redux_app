/**
 * The Reducer of the Auth Store
 */

import { AuthState } from "./authStore.state";
import * as AuthActions from "./authStore.action";
import { User } from "../../models/user.model";

// Initial state of the Auth Store
export const initialState: AuthState = {
    access_token: null,
    refresh_token: null,
    loggedIn: false,
    user: null,
    error: null
};

// Auth Reducer That transforms the state according to the action dispatched 
export function authReducer(state = initialState, action: AuthActions.AuthActions): AuthState {
    switch(action.type) {
        case AuthActions.LOGGED_IN:
            return Object.assign({}, state, {
                loggedIn: true
            });
        case AuthActions.LOGGED_OUT:
            return Object.assign({}, state, {
                loggedIn: false
            });
        case AuthActions.SET_TOKEN:
            return Object.assign({}, state, {
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token,
                access_token_exp: action.payload.access_token_exp
            });
        case AuthActions.SET_LOGGED_USER:
            return Object.assign({}, state, {
                user: { ...state.user, ...action.payload }
            });
        case AuthActions.AUTH_ERROR: 
            return Object.assign({}, state, {
                error: action.payload
            });
        case AuthActions.TRY_LOGIN:
            const newUser = new User();
            newUser.caremoreId = action.payload.username;
            newUser.password = action.payload.password;
            return Object.assign({}, state, {
                user: newUser
            });
        default:
            return state;
    }
}
