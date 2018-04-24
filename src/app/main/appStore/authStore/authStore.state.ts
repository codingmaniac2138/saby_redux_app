<<<<<<< HEAD
/**
 * The Authorization State which has the JSON Web Token, loggedIn state whether user has 
 * logged in or not.
 */

import { User } from "../../models/user.model";

export interface AuthState {
    access_token: string;
    refresh_token?: string;
    loggedIn: boolean;
    user?: User;
    error?: string;
    access_token_exp?: string;
=======
/**
 * The Authorization State which has the JSON Web Token, loggedIn state whether user has 
 * logged in or not.
 */

import { User } from "../../models/user.model";

export interface AuthState {
    access_token: string;
    refresh_token?: string;
    loggedIn: boolean;
    user?: User;
    error?: string;
    access_token_exp?: string;
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
}