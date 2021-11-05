import axios from "axios"
import { BASE_URL } from "../configs/utils"
import {
    ERROR,
    GET_LIST_PRICE_SHRIMP,
    LOAD_MORE,
    LOAD_MORE_PRICE_SHRIMP,
    LOADING,
    SEARCH_PRICE_SHRIMP
} from "../configs/types"

export const getListPriceShrimp = (limit, page) => {
    return async(dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.get(BASE_URL + '/shrimp_prices?per_page=' + limit + '&page=' + page + '&with=region')
            .then((res) => {
                // console.log(res.data)
                dispatch({
                    type: GET_LIST_PRICE_SHRIMP,
                    payload: res.data.data
                })
            })
            .catch((e) => {
                dispatch({
                    type: ERROR
                })
            })
    }
}

export const loadMorePrice = (limit, page, region, size) => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_MORE
        })
        axios.get(BASE_URL + '/shrimp_prices?per_page='+limit+'&page='+page+'&with=region,creator&region_id='+region+'&size=' + size)
            .then((res) => {
                dispatch({
                    type: LOAD_MORE_PRICE_SHRIMP,
                    payload: res.data.data
                })
            }).catch((e) => {
                dispatch({
                    type: ERROR
                })
        })
    }
}

export const searchListPrice = (region, size) => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.get(BASE_URL + '/shrimp_prices?per_page=15&page=1&with=region,creator&region_id='+region+'&size=' + size)
            .then((res) => {
                dispatch({
                    type: SEARCH_PRICE_SHRIMP,
                    payload: res.data.data
                })
            }).catch((e) => {
            dispatch({
                type: ERROR
            })
        })
    }
}