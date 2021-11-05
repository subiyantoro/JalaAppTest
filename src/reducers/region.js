import {GET_LIST_REGION, LOAD_MORE, LOAD_MORE_REGION, LOADING} from "../configs/types";

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
        case GET_LIST_REGION: {
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        case LOAD_MORE_REGION: {
            return {
                ...state,
                loadMore: false,
                loading: false,
                data: state.data.concat(action.payload)
            }
        }
        default: {
            return state
        }
    }
}