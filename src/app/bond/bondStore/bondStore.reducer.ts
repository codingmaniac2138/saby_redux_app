import { BondState } from "./bondStore.state";

import { BondActions } from "./bondStore.action";


/**
 * Bond Reducer and Initial State 
 */

const bondInitialState: BondState = {

};

export function bondReducer(state = bondInitialState, action: BondActions): BondState {
    return state;
}