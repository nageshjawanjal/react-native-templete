import {
    SEARCH_SUCCESS,
    SEARCH_ERROR,
    SEARCH_STARTED
} from './Types';

const initialState = {
    loading: false,
    data: {},
    error: null
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_STARTED:
            return {
                ...state,
                loading: true
            };
            case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
               data:action.data
            };
            case SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}