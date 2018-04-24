<<<<<<< HEAD
import { Action } from "@ngrx/store";

/**
 * The Actions in the Bond Store
 */

export const TEST_ACTION = "TEST_ACTION"; 

export class TestAction implements Action {
    readonly type = TEST_ACTION;
}

=======
import { Action } from "@ngrx/store";

/**
 * The Actions in the Bond Store
 */

export const TEST_ACTION = "TEST_ACTION"; 

export class TestAction implements Action {
    readonly type = TEST_ACTION;
}

>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
export type BondActions = TestAction;