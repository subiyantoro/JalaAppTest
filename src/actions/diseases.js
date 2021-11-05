import {ERROR, GET_LIST_DISEASES_SHRIMP, LOAD_MORE, LOAD_MORE_DISEASES_SHRIMP, LOADING} from "../configs/types";
import axios from "axios";
import {BASE_URL, TOKEN} from "../configs/utils";

export const getDiseasesList = (limit, page) => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.get(BASE_URL + '/diseases?per_page=' + limit + '&page=' + page, {
            headers: {
                'Authorization': TOKEN
            }
        }).then((res) => {
            dispatch({
                type: GET_LIST_DISEASES_SHRIMP,
                payload: res.data.data
            })
        }).catch((e) => {
            dispatch({
                type: ERROR
            })
        })
    }
}

export const loadMoreDiseases = (limit, page) => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_MORE
        })
        axios.get(BASE_URL + '/diseases?per_page=' + limit + '&page=' + page, {
            headers: {
                'Authorization': TOKEN
            }
        }).then((res) => {
            dispatch({
                type: LOAD_MORE_DISEASES_SHRIMP,
                payload: res.data.data
            })
        }).catch((e) => {
            dispatch({
                type: ERROR
            })
        })
    }
}