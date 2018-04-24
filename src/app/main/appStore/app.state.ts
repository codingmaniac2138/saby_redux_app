/**
 * The App State of the Application it will contain the state of the authStore, bondStore, 
 * usermanagementStore and codingreviewStore.
 */

// Importing the Auth State
import { AuthState } from "./authStore/authStore.state";

// Importing the Bond State
import { BondState } from "../../bond/bondStore/bondStore.state";

// Importing the CodingReview State
import { CodingReviewState } from "../../coding-review/codingReviewStore/codingReview.state";

// Importing the User Management State
import { UserManagementState } from "../../user-management/userManagementStore/userManagement.state";


export interface AppState {
    auth: AuthState,
    bond: BondState,
    codingReview: CodingReviewState,
    userManagement: UserManagementState
}