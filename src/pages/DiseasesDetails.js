import React, {useEffect} from "react";
import WebView from "react-native-webview";
import {DISEASES_URL} from "../configs/utils";

const DiseasesDetails = ({route}) => {
    const data = route.params.data

    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <WebView source={{uri: DISEASES_URL + data.id}} startInLoadingState={true} />
    )
}

export default DiseasesDetails