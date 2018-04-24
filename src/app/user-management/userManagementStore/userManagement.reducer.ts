<<<<<<< HEAD
// Importing the User Mangement State
import { UserManagementState } from "./userManagement.state";

//Importing all the actions from the user management
import { UserManagementActions } from "./userManagement.action";

export const initialUserManagementState: UserManagementState = {

};

export function userManagementReducer(state = initialUserManagementState, action: UserManagementActions): UserManagementState {
    return state;
=======
// Importing the User Mangement State
import { UserManagementState } from "./userManagement.state";

//Importing all the actions from the user management
import { UserManagementActions } from "./userManagement.action";

export const initialUserManagementState: UserManagementState = {

};

export function userManagementReducer(state = initialUserManagementState, action: UserManagementActions): UserManagementState {
    return state;
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
}