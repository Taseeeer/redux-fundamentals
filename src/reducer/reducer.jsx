import { DECREMENT, INCREMENT, RESET, SET } from "../actions/actions";

export const intialState = { count: 0 };

export const reducer = (state = intialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return { count: state.count+1 }

        case DECREMENT:
            return { count: state.count -1 }

        case RESET:
            return { count: state.count = 0}

        case SET:
            return { count: action.payload }

        default:
            return state
    }
}