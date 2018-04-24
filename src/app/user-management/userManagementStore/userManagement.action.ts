<<<<<<< HEAD
import { Action } from "@ngrx/store";

/**
 * Actions for the User Management Module
 */

export const TEST_ACTION = "TEST_ACTION"; 

export class TestAction implements Action {
    readonly type = TEST_ACTION;
}

=======
import { Action } from "@ngrx/store";

/**
 * Actions for the User Management Module
 */

export const TEST_ACTION = "TEST_ACTION"; 

export class TestAction implements Action {
    readonly type = TEST_ACTION;
}

>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
export type UserManagementActions = TestAction;