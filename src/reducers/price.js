import {
    ERROR,
    GET_LIST_PRICE_SHRIMP,
    LOAD_MORE,
    LOAD_MORE_PRICE_SHRIMP,
    LOADING,
    SEARCH_PRICE_SHRIMP
} from "../configs/types"

const initState = {
    listData: [],
    loading: false,
    loadMore: false,
    error: false
}

export default (state = initState, action = {}) => {
    switch(action.type) {
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
        case GET_LIST_PRICE_SHRIMP: {
            return {
                ...state,
                loading: false,
                listData: action.payload
            }
        }
        case LOAD_MORE_PRICE_SHRIMP: {
            return {
                ...state,
                loadMore: false,
                listData: state.listData.concat(action.payload)
            }
        }
        case SEARCH_PRICE_SHRIMP: {
            return {
                ...state,
                loading: false,
                listData: action.payload
            }
        }
        case ERROR: {
            return {
                ...state,
                error: true
            }
        }
        default: {
            return state
        }
    }
}