import { ActionReducerMap } from "@ngrx/store";

// Importing the App State
import { AppState } from "./app.state";

// Importing the Auth Reducer
import { authReducer } from "./authStore/authStore.reducer";

// Importing the Bond Reducer
import { bondReducer } from "../../bond/bondStore/bondStore.reducer";

// Importing the CodingReview Reducer
import { codingReviewReducer } from "../../coding-review/codingReviewStore/codingReview.reducer";

// Importing the User Management Reducer
import { userManagementReducer } from "../../user-management/userManagementStore/userManagement.reducer";

/**
 * The reducer for the whole application
 * 1. It includes the reducer for the Bond, Coding Review, User Management and other modules
 * 2. Please, add reducers for the future modules as the application grows
 */
 
export const appReducer: ActionReducerMap<AppState> = {
    auth: authReducer,
    bond: bondReducer,
    codingReview: codingReviewReducer,
    userManagement: userManagementReducer
};