import {ERROR, GET_LIST_REGION, LOAD_MORE, LOAD_MORE_REGION, LOADING} from "../configs/types";
import axios from "axios";
import {BASE_URL} from "../configs/utils";

export const getListRegion = (city: String) => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.get(BASE_URL + '/regions?has=shrimp_prices&search=' + city)
            .then((res) => {
                dispatch({
                    type: GET_LIST_REGION,
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

export const loadMoreRegion = (city: String, page: Number) => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_MORE
        })
        axios.get(BASE_URL + '/regions?has=shrimp_prices&search=' + city + '&page=' + page)
            .then((res) => {
                dispatch({
                    type: LOAD_MORE_REGION,
                    payload: res.data.data
                })
            }).catch((e) => {
                dispatch({
                    type: ERROR
                })
        })
    }
}