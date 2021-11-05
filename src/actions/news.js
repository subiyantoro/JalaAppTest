import {ERROR, GET_LIST_NEWS_SHRIMP, LOAD_MORE, LOAD_MORE_NEWS_SHRIMP, LOADING} from "../configs/types";
import axios from "axios";
import {BASE_URL, TOKEN} from "../configs/utils";

export const getListNews = (limit, page) => {
    return async (dispatch) => {
        dispatch({
            type: LOADING
        })
        axios.get(BASE_URL + '/posts?per_page=' + limit + '&page=' + page + '&with=creator', {
            headers: {
                'Authorization': TOKEN
            }
        }).then((res) => {
            dispatch({
                type: GET_LIST_NEWS_SHRIMP,
                payload: res.data.data
            })
        }).catch((e) => {
            dispatch({
                type: ERROR
            })
        })
    }
}

export const loadMoreListNews = (limit, page) => {
    return async (dispatch) => {
        dispatch({
            type: LOAD_MORE
        })
        axios.get(BASE_URL + '/posts?per_page=' + limit + '&page=' + page + '&with=creator', {
            headers: {
                'Authorization': TOKEN
            }
        }).then((res) => {
            dispatch({
                type: LOAD_MORE_NEWS_SHRIMP,
                payload: res.data.data
            })
        }).catch((e) => {
            dispatch({
                type: ERROR
            })
        })
    }
}