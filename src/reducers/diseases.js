import {ERROR, GET_LIST_DISEASES_SHRIMP, LOAD_MORE, LOAD_MORE_DISEASES_SHRIMP, LOADING} from "../configs/types";

const initState = {
    data: [],
    loading: false,
    loadMore: false,
    error: false
}

export default (state = initState, action = {}) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case LOAD_MORE: {
            return {
                ...state,
                loadMore: true
            }
        }
        case ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case GET_LIST_DISEASES_SHRIMP: {
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        case LOAD_MORE_DISEASES_SHRIMP: {
            return {
                ...state,
                loadMore: false,
                data: state.data.concat(action.payload)
            }
        }
        default: {
            return state
        }
    }
}