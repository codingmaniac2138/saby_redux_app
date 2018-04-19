// Importing the Coding Review State
import { CodingReviewState } from "./codingReview.state";

// Importing Coding Review Actions
import { CodingReviewActions } from "./codingReview.action";

/**
 * The Initial State of the Coding Review and Coding Review Reducer
 */

const codingReviewInitialState: CodingReviewState = {

};

export function codingReviewReducer(state = codingReviewInitialState, action: CodingReviewActions): CodingReviewState {
    return state;
}