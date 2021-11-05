import {ActivityIndicator, Text} from "react-native";
import React from "react";

export default (loadMore) => {
    return (
        loadMore ?
            <ActivityIndicator size="small" /> :
            <Text style={{textAlign: 'center'}}>Load More</Text>
    )
}