import React, {useEffect} from "react";
import {ActivityIndicator, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import WebView from "react-native-webview";
import {NEWS_URL} from "../configs/utils";

const NewsDetails = () => {
    const route = useRoute()
    const item = route.params.data

    return (
        <WebView source={{uri: NEWS_URL + item.id}} containerStyle={{margin: 10, borderRadius: 5, elevation: 1}} startInLoadingState={true}/>
    )
}

export default NewsDetails