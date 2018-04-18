import { Action } from "@ngrx/store";

/**
 * The Actions in the Coding Review Store
 */

export const TEST_ACTION = "TEST_ACTION"; 

export class TestAction implements Action {
    readonly type = TEST_ACTION;
}

export type CodingReviewActions = TestAction;